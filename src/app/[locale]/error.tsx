'use client';

import { useEffect } from 'react';

export default function ErrorPage({
                                      error,
                                      reset,
                                  }: {
    error: Error;
    reset: () => void;
}) {
    useEffect(() => {
        console.error('Uygulama hatası:', error);
    }, [error]);

    return (
        <div className="text-center p-10 text-red-500">
            <h2>Beklenmedik bir hata oluştu.</h2>
            <p>{error?.message ?? 'Hata mesajı alınamadı.'}</p>
            <button onClick={reset} className="mt-4 underline">
                Sayfayı Yeniden Yükle
            </button>
        </div>
    );
}
