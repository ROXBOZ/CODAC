/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { LmsContent } from 'src/components/lms-page/LmsContentContainer';
import styles from 'src/components/lms-search/search.module.css';
import SearchResult from 'src/components/lms-search/SearchResult';
import { useSettings } from 'src/hooks/useSettings';
import { filteredIndex } from 'src/lib/lms-index';

export default function SearchResults() {

    const { keywordArray, filter } = useSettings();
    const [searchResults, setSearchResults] = useState<Array<filteredIndex> | null>(null);
    const [show, setShow] = useState<boolean>(false);
    const keywords = keywordArray.toString();

    const filterInputs = () => {
        setShow(false);
        var myHeaders = new Headers();
        var urlencoded = new URLSearchParams();
        urlencoded.append("input", `${keywords}`);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded
        };

        fetch("/api/lms-search", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setSearchResults(result.filteredIndex.sort((a: filteredIndex, b: filteredIndex) => b.tags.length - a.tags.length));
                if (result.filteredIndex.length < 1) {
                    setShow(true);
                };
            })
            .catch(error => {
                console.log('error', error);
                setShow(true);
            });
    };

    useEffect(() => {
        if (keywordArray) {
            filterInputs();
        };

    }, [keywordArray, filter])

    return (
        <>
            <LmsContent>
                <h1 className={styles.resultH}>Search Results</h1>
                {!show && <p className={styles.resultP}>TAGS</p>}
                {searchResults?.map((result: filteredIndex, index: number) => {
                    return <SearchResult key={index} index={index} result={result} />
                })}
                {show && <div>No results    <Image src={"/icons/empty-box.png"} alt='empty' width={50} height={50} className={styles.resultImage} /></div>}
            </LmsContent>
        </>
    )
}