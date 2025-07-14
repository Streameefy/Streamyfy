import React from 'react';

export const MenuIcon: React.FC<{className?: string}> = ({className}) => (
  <svg className={`w-6 h-6 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
  </svg>
);

export const XIcon: React.FC<{className?: string}> = ({className}) => (
  <svg className={`w-6 h-6 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
  </svg>
);

export const FilmIcon: React.FC<{className?: string}> = ({className}) => (
  <svg className={`w-8 h-8 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 16h4m10 0h4M4 4h16a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1z"></path>
  </svg>
);

export const ServerIcon: React.FC<{className?: string}> = ({className}) => (
  <svg className={`w-5 h-5 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
  </svg>
);

export const TagIcon: React.FC<{className?: string}> = ({className}) => (
  <svg className={`w-5 h-5 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5a2 2 0 012 2v5a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z"></path>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 13h10V7h-4"></path>
  </svg>
);

export const SearchIcon: React.FC<{className?: string}> = ({className}) => (
  <svg className={`w-8 h-8 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
);

export const CreditCardIcon: React.FC<{className?: string}> = ({className}) => (
  <svg className={`w-8 h-8 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
);

export const PlayIcon: React.FC<{className?: string}> = ({className}) => (
  <svg className={`w-8 h-8 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);

export const StarIcon: React.FC<{className?: string}> = ({className}) => (
  <svg className={`w-5 h-5 ${className}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
);

export const WhatsAppIcon: React.FC<{className?: string}> = ({className}) => (
  <svg className={`w-6 h-6 ${className}`} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.289.173-1.413z"/></svg>
);

export const EmailIcon: React.FC<{className?: string}> = ({className}) => (
  <svg className={`w-6 h-6 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
);

export const PayPalIcon: React.FC<{className?: string}> = ({className}) => (
  <svg className={`w-6 h-6 ${className}`} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.324 4.148c.5-.04 1.012.016 1.54.218.41.155.77.388 1.07.697.35.358.59.814.71 1.37.12.556.09 1.15-.08 1.73-.17.58-.51 1.08-1.02 1.5-.51.42-1.14.7-1.89.84-.75.14-1.5.12-2.22-.05-.4-.09-.59-.28-.5-.7.09-.4.36-.59.76-.5 1.22.18 2.52.02 3.62-.49.99-.45 1.73-1.28 1.98-2.31.25-1.03-.03-2.14-.78-2.91-.75-.77-1.84-1.18-2.97-1.09-1.13.09-2.16.59-2.85 1.45-.69.86-.98 1.95-.83 3.06.15 1.11.75 2.1 1.73 2.65.98.55 2.14.7 3.3.43.3-.07.6-.09.89-.04.4.07.59.27.5.68-.09.41-.36.6-.76.51-1.42-.23-2.87-.04-4.2.58-1.33.62-2.4 1.66-3.12 2.98-.38.69-.64 1.46-.77 2.27-.13.81-.11 1.64.04 2.45.15.81.45 1.59.88 2.3.16.27.41.43.7.43h2.15c.39 0 .68-.21.78-.58.33-1.22.92-2.36 1.76-3.41.84-1.05 1.9-1.93 3.16-2.61.4-.21.8-.39 1.22-.53.28-.1.57-.14.86-.14.41 0 .68.21.58.6-.1.39-.38.58-.77.51-.59-.11-1.2-.1-1.78.08-.58.18-1.12.47-1.61.85-.49.38-.92.83-1.28 1.34s-.65 1.07-.85 1.67c-.2.6-.3 1.23-.29 1.86.01.63.13 1.26.36 1.86.13.36.41.56.77.56h2.14c.39 0 .68-.21.78-.58.32-1.18.9-2.29 1.72-3.3.82-1.01 1.85-1.85 3.05-2.51.39-.21.79-.38 1.2-.51.29-.09.58-.13.87-.13.41 0 .68.21.58.6-.1.39-.38.58-.77.51-.52-.09-1.06-.08-1.58.07-.52.15-1.01.4-1.46.74-.45.34-.85.76-1.18 1.23-.33.47-.58.98-.74 1.52-.16.54-.24 1.1-.22 1.67s.14 1.13.38 1.67c.15.35.43.55.79.55h2.4c.4 0 .7-.23.81-.61.11-.38.16-.77.16-1.16 0-.6-.1-1.19-.31-1.75-.21-.56-.51-1.09-.9-1.57-.39-.48-.87-.89-1.42-1.21-.55-.32-1.15-.55-1.78-.67-.63-.12-1.27-.14-1.9-.05-.4.05-.59-.27-.5-.68.09-.41.36-.6.76-.51 1.14.16 2.28.53 3.32 1.13.81.47 1.54 1.06 2.16 1.76.62.7 1.12 1.5 1.48 2.38.17.41.48.64.85.64h2.53c.23 0 .43-.11.55-.31.33-.55.54-1.15.62-1.78.08-.63.04-1.26-.13-1.88s-.46-1.2-.87-1.72c-.41-.52-.92-.96-1.5-1.32-.58-.36-1.22-.62-1.89-.78-.67-.16-1.36-.22-2.04-.17-.4.03-.59-.27-.5-.68.09-.41.36-.6.76-.51 1.35.25 2.68.73 3.86 1.45.58.36 1.11.79 1.59 1.29.48.5.89 1.06 1.22 1.67.33.61.57 1.26.71 1.93.14.67.18 1.35.11 2.03-.07.68-.24 1.34-.51 1.97-.27.63-.64 1.21-1.1 1.72s-1 1-1.59 1.39c-.59.39-1.22.68-1.88.88s-1.33.29-2.01.29h-2.53c-.41 0-.72-.23-.84-.65-.29-1-.77-1.95-1.44-2.83-.67-.88-1.51-1.65-2.5-2.3-1-.65-2.12-1.16-3.33-1.52a.72.72 0 01-.1-.02z"/></svg>
);

export const StripeIcon: React.FC<{className?: string}> = ({className}) => (
  <svg className={`w-6 h-6 ${className}`} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.932 5.306c-3.134 0-5.918 1.599-7.552 4.022.212-3.18 2.316-5.716 5.056-6.695 1.116-.39 2.292-.587 3.51-.587 3.133 0 5.917 1.6 7.551 4.023-.212-3.18-2.316-5.716-5.055-6.695-1.116-.39-2.292-.587-3.51-.587zM11.932 8.783c-1.396 0-2.69.46-3.725 1.235-.296 2.333.515 4.805 2.373 6.248 1.002.776 2.23 1.235 3.536 1.235 1.396 0 2.69-.46 3.724-1.235.297-2.333-.514-4.805-2.372-6.248-1.002-.776-2.23-1.235-3.536-1.235zM3 13.565C3 9.873 5.98 6.75 9.536 6.75c.697 0 1.396.115 2.094.346-3.134 0-5.918 2.059-7.552 4.942C3.42 11.16 3 12.312 3 13.565zm14.379-1.868c1.396 0 2.625.692 3.423 1.802C20.01 9.873 17.03 6.75 13.475 6.75c-.698 0-1.396.115-2.094.346 3.133 0 5.917 2.059 7.551 4.942.658-.877 1.047-1.977 1.047-3.171z"/></svg>
);

export const LightBulbIcon: React.FC<{className?: string}> = ({className}) => (
  <svg className={`w-6 h-6 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
);

export const TvIcon: React.FC<{className?: string}> = ({className}) => (
  <svg className={`w-6 h-6 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
  </svg>
);

export const BankIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={`w-6 h-6 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" x2="21" y1="22" y2="22"/><line x1="6" x2="6" y1="18" y2="11"/>
        <line x1="10" x2="10" y1="18" y2="11"/><line x1="14" x2="14" y1="18" y2="11"/>
        <line x1="18" x2="18" y1="18" y2="11"/><polygon points="12 2 20 7 4 7"/>
    </svg>
);

export const MobileWalletIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={`w-6 h-6 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
    </svg>
);

export const CheckCircleIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={`w-6 h-6 ${className}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
    </svg>
);

export const CrownIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={`w-6 h-6 ${className}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.09 4.142a.998.998 0 00-2.18 0l-1.936 3.99a.25.25 0 01-.186.136L2.52 8.87c-1.05.174-1.47 1.44-.71 2.15l2.75 2.52a.25.25 0 01.073.22l-.65 4.31c-.18 1.04.91 1.84 1.86 1.33l3.56-1.95a.25.25 0 01.23 0l3.56 1.95c.95.51 2.04-.29 1.86-1.33l-.65-4.31a.25.25 0 01.073-.22l2.75-2.52c.76-.71.34-1.976-.71-2.15l-4.268-.602a.25.25 0 01-.186-.136l-1.936-3.99z"></path>
    </svg>
);

export const ShieldCheckIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={`w-6 h-6 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.471a9 9 0 11-12.236 0A9 9 0 0117.618 7.529z"></path>
    </svg>
);