import { elementTypeAcceptingRef } from '@mui/utils';
import React, { FC, useEffect, useState } from 'react';

import { api } from '../constants';

export const Articles: FC = () => {
    
    const [articles, setArticles] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const getFetchArticles = async () => {
        setLoading(true);
        setError('');
        try {
        const response = await fetch(api);
        if (!response.ok) {
            throw new Error('not OK');
        }
        const data = await response.json();
        setArticles(data);
        } catch (err) {
            setError((err as Error).message)
        } finally {
            setLoading(false);
        }
    };
    

    useEffect(() => {
        getFetchArticles();
    }, []);

    return (
        <>
            <h2>Articles</h2>
            {loading && <p>Loading ... </p>}
            {!loading && (
            <ul>
            {
                articles.map(element => <li key={element.id}>{element.title}</li>,'')
            }
            </ul>)}
            {error && <p style={{color: 'red' }}>{error}</p>}
            <button onClick={() => getFetchArticles()}>Reload</button>
        </>
        );
}