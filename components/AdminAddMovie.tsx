import React, { useState, useEffect } from 'react';
import { Genre } from '../types';

interface AdminMovie {
  id: number;
  title: string;
  price: number;
  posterUrl: string; // public URL
  genre: Genre;
  languages: string[];
  server: string;
  priceType: 'monthly' | 'one-time';
}

const ADMIN_USERNAME = 'adnan';
const ADMIN_PASSWORD = 'adnan';
const IMGBB_API_KEY = 'YOUR_IMGBB_API_KEY_HERE'; // <-- Replace with your imgbb API key

const AdminAddMovie: React.FC = () => {
  // Auth state
  const [isAuthed, setIsAuthed] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Movie form state
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [posterFile, setPosterFile] = useState<File | null>(null);
  const [posterUrlInput, setPosterUrlInput] = useState('');
  const [preview, setPreview] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const [imageMode, setImageMode] = useState<'upload' | 'url'>('upload');

  // Admin movies state
  const [adminMovies, setAdminMovies] = useState<AdminMovie[]>([]);
  const [editId, setEditId] = useState<number | null>(null);

  // Optional: allow admin to select genre, language, etc. For now, use defaults
  const defaultGenre = Genre.Drama;
  const defaultLanguages = ['English'];
  const defaultServer = 'Alpha-S1';
  const defaultPriceType: 'monthly' | 'one-time' = 'monthly';

  // Load admin movies from localStorage
  useEffect(() => {
    const existing = JSON.parse(localStorage.getItem('adminMovies') || '[]');
    setAdminMovies(existing);
  }, []);

  // Login handler
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsAuthed(true);
      setLoginError('');
    } else {
      setLoginError('Invalid username or password');
    }
  };

  // Logout handler
  const handleLogout = () => {
    setIsAuthed(false);
    setUsername('');
    setPassword('');
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPosterFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  // Upload image to imgbb and return the public URL
  const uploadToImgbb = async (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64 = (reader.result as string).split(',')[1];
        try {
          const formData = new FormData();
          formData.append('key', IMGBB_API_KEY);
          formData.append('image', base64);
          setUploading(true);
          setUploadError('');
          const res = await fetch('https://api.imgbb.com/1/upload', {
            method: 'POST',
            body: formData,
          });
          const data = await res.json();
          setUploading(false);
          if (data.success) {
            resolve(data.data.url);
          } else {
            setUploadError('Image upload failed.');
            reject(new Error('Image upload failed.'));
          }
        } catch (err) {
          setUploading(false);
          setUploadError('Image upload failed.');
          reject(err);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  // Add or update movie
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let posterUrl = '';
    if (imageMode === 'upload') {
      if (!posterFile) return;
      try {
        posterUrl = await uploadToImgbb(posterFile);
      } catch {
        return;
      }
    } else {
      if (!posterUrlInput) return;
      posterUrl = posterUrlInput;
    }
    if (!title || !price || !posterUrl) return;
    if (editId !== null) {
      // Edit existing
      const updatedMovies = adminMovies.map(m =>
        m.id === editId ? { ...m, title, price: parseFloat(price), posterUrl } : m
      );
      setAdminMovies(updatedMovies);
      localStorage.setItem('adminMovies', JSON.stringify(updatedMovies));
      setEditId(null);
    } else {
      // Add new
      const newMovie: AdminMovie = {
        id: Date.now(),
        title,
        price: parseFloat(price),
        posterUrl,
        genre: defaultGenre,
        languages: defaultLanguages,
        server: defaultServer,
        priceType: defaultPriceType,
      };
      const updatedMovies = [newMovie, ...adminMovies];
      setAdminMovies(updatedMovies);
      localStorage.setItem('adminMovies', JSON.stringify(updatedMovies));
    }
    setTitle('');
    setPrice('');
    setPosterFile(null);
    setPosterUrlInput('');
    setPreview(null);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 1500);
  };

  // Start editing a movie
  const handleEdit = (movie: AdminMovie) => {
    setEditId(movie.id);
    setTitle(movie.title);
    setPrice(movie.price.toString());
    setPosterFile(null);
    setPosterUrlInput(movie.posterUrl);
    setPreview(movie.posterUrl);
    setImageMode('url');
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setEditId(null);
    setTitle('');
    setPrice('');
    setPosterFile(null);
    setPosterUrlInput('');
    setPreview(null);
    setImageMode('upload');
  };

  // Handle image mode change
  const handleImageModeChange = (mode: 'upload' | 'url') => {
    setImageMode(mode);
    setPosterFile(null);
    setPosterUrlInput('');
    setPreview(null);
  };

  // Update preview for pasted URL
  useEffect(() => {
    if (imageMode === 'url' && posterUrlInput) {
      setPreview(posterUrlInput);
    }
  }, [imageMode, posterUrlInput]);

  if (!isAuthed) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
        <h2 className="text-2xl mb-4">Admin Login</h2>
        <form onSubmit={handleLogin} className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-xs space-y-4">
          <div>
            <label className="block mb-1 font-semibold">Username</label>
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              className="w-full p-2 rounded bg-gray-800 border border-gray-700"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full p-2 rounded bg-gray-800 border border-gray-700"
              required
            />
          </div>
          <button type="submit" className="w-full py-2 bg-orange-600 rounded font-bold hover:bg-orange-700 transition">Login</button>
          {loginError && <div className="text-red-400 text-center mt-2">{loginError}</div>}
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
      <div className="w-full max-w-md flex justify-end mb-2">
        <button onClick={handleLogout} className="text-orange-400 hover:underline">Logout</button>
      </div>
      <h1 className="text-3xl font-bold mb-6">{editId ? 'Edit Movie' : 'Add New Movie (Private Admin)'}</h1>
      <form onSubmit={handleSubmit} className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Poster Image</label>
          <div className="flex gap-4 mb-2">
            <label className="flex items-center gap-2">
              <input type="radio" checked={imageMode === 'upload'} onChange={() => handleImageModeChange('upload')} /> Upload Image
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" checked={imageMode === 'url'} onChange={() => handleImageModeChange('url')} /> Paste Image Link
            </label>
          </div>
          {imageMode === 'upload' && (
            <>
              <input type="file" accept="image/*" onChange={handleImageChange} className="w-full" />
              {uploading && <div className="text-orange-400 mt-2">Uploading image...</div>}
              {uploadError && <div className="text-red-400 mt-2">{uploadError}</div>}
            </>
          )}
          {imageMode === 'url' && (
            <input
              type="text"
              placeholder="Paste direct image link (https://...)"
              value={posterUrlInput}
              onChange={e => setPosterUrlInput(e.target.value)}
              className="w-full p-2 rounded bg-gray-800 border border-gray-700"
              required
            />
          )}
          {preview && <img src={preview} alt="Preview" className="mt-2 w-32 h-48 object-cover rounded shadow" />}
        </div>
        <div>
          <label className="block mb-1 font-semibold">Title</label>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="w-full p-2 rounded bg-gray-800 border border-gray-700" required />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Price</label>
          <input type="number" value={price} onChange={e => setPrice(e.target.value)} className="w-full p-2 rounded bg-gray-800 border border-gray-700" required min="0" step="0.01" />
        </div>
        <div className="flex gap-2">
          <button type="submit" className="w-full py-2 bg-orange-600 rounded font-bold hover:bg-orange-700 transition" disabled={uploading}>{editId ? 'Update Movie' : 'Add Movie'}</button>
          {editId && <button type="button" onClick={handleCancelEdit} className="w-full py-2 bg-gray-700 rounded font-bold hover:bg-gray-800 transition">Cancel</button>}
        </div>
        {success && <div className="text-green-400 text-center mt-2">{editId ? 'Movie updated!' : 'Movie added! You can add another.'}</div>}
      </form>
      <div className="w-full max-w-md mt-8">
        <h2 className="text-xl font-bold mb-4">Your Movies</h2>
        <div className="space-y-4">
          {adminMovies.length === 0 && <div className="text-gray-400">No movies added yet.</div>}
          {adminMovies.map(movie => (
            <div key={movie.id} className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg">
              <img src={movie.posterUrl} alt={movie.title} className="w-16 h-24 object-cover rounded shadow" />
              <div className="flex-1">
                <div className="font-bold text-white">{movie.title}</div>
                <div className="text-gray-300">${movie.price.toFixed(2)}</div>
              </div>
              <button onClick={() => handleEdit(movie)} className="px-3 py-1 bg-orange-600 rounded text-white font-bold hover:bg-orange-700 transition">Edit</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminAddMovie; 