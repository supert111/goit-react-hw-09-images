import { useState, useEffect } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem/ImageGalleryItem';
import Loader from './components/Loader/Loader';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import fetchPhoto from './api/data.api';
import styles from './App.module.css';

export default function App () {
    const [hits, setHits] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [seachQuery, setSeachQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [bigImageURL, setBigImageURL] = useState('');

    useEffect(() => {
        if (seachQuery) {
            fetchImages();
        }
    })
    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState.seachQuery !== this.state.seachQuery) {
    //         this.fetchImages();
    //     }
    // }

    const fetchImages = () => {
       // const { seachQuery, currentPage } = this.state;

       setIsLoading(true);
        
        fetchPhoto(seachQuery, currentPage)
            .then(hits => { 
                setHits(prevState => ({
                    hits: [...prevState.hits, ...hits],
                    currentPage: prevState.currentPage + 1,
                }));
            })
            .catch(error => setError({error}))
            .finally(() => {
                setIsLoading(false);
                window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: 'smooth',
                });
            });
    };

    const onChangeQuery = query => {
        setSeachQuery(query);
        setCurrentPage(1);
        setHits([]);
        setError(null);

        // this.setState({
        //     seachQuery: query,
        //     currentPage: 1,
        //     hits: [],
        //     error: null,
        // });
    };

    const toggleModal = () => {
        setShowModal(({showModal}) => ({
            showModal: !showModal,
        }))
    }

    const searchBigImg = (idImg) => {
        //const { hits } = this.state;
        const searchIdImg = hits.find( item => item.id === idImg);
        const { largeImageURL } = searchIdImg;
        setBigImageURL(largeImageURL);
        toggleModal();
    }

    // render() {
       // const { hits, isLoading, error, showModal, bigImageURL } = this.state;
        const shouldRenderLoadMoreButton = hits.length > 0 && !isLoading;

        return (
            <div className={styles.App}> 
                <Searchbar onSubmit={onChangeQuery}/>
                {error && <h1>Try entering another request</h1>}
                <ImageGallery>
                    <ImageGalleryItem hits={hits} onClick={searchBigImg}/>
                </ImageGallery> 
                {isLoading && <Loader />}
                {shouldRenderLoadMoreButton && <Button onClick={fetchImages}/>}
                {showModal && <Modal onClose={toggleModal}> <img src={ bigImageURL } alt="" /> </Modal> }
            </div>    
        );
    }
