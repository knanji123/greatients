import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './main.css';

const MainPage = () => {

    return (

        <div className="main gradient">
            <div className="container-border">
            </div>

            <div className="container">

                <div className="left-side">
                    <svg className="logo" fill="url(#my-cool-gradient) #447799;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 208.77 67.51"><defs></defs><linearGradient id="logo-gradient-horizontal">
                        <stop offset="0%" stop-color="var(--color-stop-1)" />
                        <stop offset="75%" stop-color="var(--color-stop-2)" />
                        <stop offset="120%" stop-color="var(--color-stop-3)" />
                    </linearGradient><title>greatients</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M206.28,12.58c-.13.35-.11.59,0,.74s.35.15.63,0a2.87,2.87,0,0,0,.82-.74,5.2,5.2,0,0,0,.7-1.23,3.66,3.66,0,0,0,.3-1.45,2.93,2.93,0,0,0-.63-1.64,6.2,6.2,0,0,0-1.86-1.64,9.33,9.33,0,0,0-3.09-1.08,11.81,11.81,0,0,0-4.24.12c.34-.45.62-.8.82-1a3.4,3.4,0,0,0,.4-.59.81.81,0,0,0,.12-.34V3.35a1.62,1.62,0,0,0-.64-1.12,8.79,8.79,0,0,0-1.48-1.11A9.25,9.25,0,0,0,196.45.3a4.36,4.36,0,0,0-1.22-.3c-.45,0-1.08.42-1.9,1.25a41.78,41.78,0,0,0-3.76,4.93c-1.44.2-2.75.35-3.95.45s-2.08.14-2.68.14c-1,0-1.67-.15-1.89-.44a1.08,1.08,0,0,1-.15-1,7.8,7.8,0,0,1,.48-1.19.84.84,0,0,0,0-1q-.15-.15-.63,0a3.46,3.46,0,0,0-1,.67,4.89,4.89,0,0,0-.93,1.31,4.31,4.31,0,0,0-.41,1.94,4.34,4.34,0,0,0,.6,2.37A4.38,4.38,0,0,0,180.6,11a7.61,7.61,0,0,0,2.34.83,14.38,14.38,0,0,0,2.83.27h.08c-1.34,2.28-2.67,4.68-4,7.18s-2.49,5-3.5,7.48c-.6,1.46-1.12,2.9-1.58,4.31a4.42,4.42,0,0,0-.69.53,18.19,18.19,0,0,1-1.53,1.26q-1.15.9-2.49,2c-.89.72-1.75,1.39-2.57,2s-1.38,1-1.67,1.3a27.15,27.15,0,0,1,2.3-5.25c1-1.76,2-3.39,3-4.87s1.85-2.76,2.57-3.8a5.94,5.94,0,0,0,1.08-1.94,1.8,1.8,0,0,0-.49-1.11A6,6,0,0,0,175.06,20a6.37,6.37,0,0,0-1.72-.82,6.79,6.79,0,0,0-1.93-.29,5.84,5.84,0,0,0-2.79,1.34,49.58,49.58,0,0,0-4.36,3.53c-1.63,1.46-3.35,3.1-5.13,4.91s-3.45,3.61-5,5.4a48,48,0,0,1,3-5.25,38.65,38.65,0,0,1,2.31-3.12c.64-.77,1.12-1.33,1.45-1.68a1.46,1.46,0,0,0,.48-.89,2.6,2.6,0,0,0-.56-1.57,6.42,6.42,0,0,0-1.37-1.33,7.23,7.23,0,0,0-1.9-1,6.27,6.27,0,0,0-2.05-.37c-.4,0-1.1.63-2.12,1.89a29.31,29.31,0,0,0-3.09,4.95,43.18,43.18,0,0,0-2.75,6.89c-.08.24-.13.48-.2.73l-.85.72a31.8,31.8,0,0,1-3.53,2.64,17.86,17.86,0,0,1-4,1.94,8.26,8.26,0,0,1-4.17.33,2.06,2.06,0,0,1-1.6-1,3.46,3.46,0,0,1-.34-1.82,7.28,7.28,0,0,1,.45-2,9.46,9.46,0,0,1,.74-1.6,4,4,0,0,0,1.23,1.37,3.42,3.42,0,0,0,2.12.64,7.17,7.17,0,0,0,3.91-1.16,13.79,13.79,0,0,0,3.2-2.79,16.26,16.26,0,0,0,2.2-3.31,6.82,6.82,0,0,0,.82-2.79,4.94,4.94,0,0,0-1.6-4.1,5.9,5.9,0,0,0-3.76-1.26,10.32,10.32,0,0,0-4.77,1.52,24.8,24.8,0,0,0-5.28,4,25.11,25.11,0,0,0-4.32,5.7c-.26.47-.48.94-.69,1.42-.27.25-.69.59-1.24,1l-2.46,2c-.89.72-1.75,1.39-2.57,2s-1.4,1-1.75,1.3a33.2,33.2,0,0,1,2.27-5.25q1.45-2.71,2.83-5T126.6,24a5.75,5.75,0,0,0,1-2c0-.75-.51-1.43-1.52-2.05a6.52,6.52,0,0,0-3.46-.93c-.55,0-1.33.68-2.35,2.05a36.56,36.56,0,0,0-3.09,5.09,47.52,47.52,0,0,0-2.44,5.81c-.16.14-.36.3-.61.48-.54.43-1.2.93-2,1.53l-2.49,1.94-2.53,1.93q3.87-9.38,7.22-15.67a86.7,86.7,0,0,1,6.4-10.45c1.29-.15,2.6-.31,3.94-.49l2.21-.29c-.15.32-.3.64-.42,1a4.32,4.32,0,0,0-.37,2.2,2.9,2.9,0,0,0,.7,1.45,5.25,5.25,0,0,0,1.16,1,12.39,12.39,0,0,0,1.63.82,43.07,43.07,0,0,1,2.79-4.3.45.45,0,0,0,.12.28q.23.23.63,0a2.74,2.74,0,0,0,.82-.74,5.59,5.59,0,0,0,.71-1.23,4.15,4.15,0,0,0,.25-1c.16-.14.32-.26.45-.36l1-.74c.18-.13.21-.54.12-1.23a2.91,2.91,0,0,0-1.38-1.83,5.53,5.53,0,0,0-3.76-.55,2,2,0,0,0-.61.23,14.3,14.3,0,0,0-1.4-.35,11.81,11.81,0,0,0-4.24.12l.82-1a3.58,3.58,0,0,0,.41-.59.92.92,0,0,0,.11-.34V3.35a1.64,1.64,0,0,0-.63-1.12,9.31,9.31,0,0,0-1.49-1.11A8.88,8.88,0,0,0,122.7.3a4.49,4.49,0,0,0-1.23-.3c-.45,0-1.08.42-1.9,1.25a42.93,42.93,0,0,0-3.76,4.93c-1.44.2-2.75.35-3.94.45s-2.09.14-2.68.14c-1,0-1.68-.15-1.9-.44a1.13,1.13,0,0,1-.15-1,7.8,7.8,0,0,1,.48-1.19.84.84,0,0,0,0-1q-.15-.15-.63,0a3.3,3.3,0,0,0-1,.67,4.49,4.49,0,0,0-.93,1.31,4.18,4.18,0,0,0-.41,1.94,4.34,4.34,0,0,0,.59,2.37,4.38,4.38,0,0,0,1.6,1.51,7.58,7.58,0,0,0,2.35.83,14.2,14.2,0,0,0,2.82.27h.08c-1.34,2.28-2.67,4.68-4,7.18s-2.49,5-3.5,7.48c-.59,1.43-1.1,2.83-1.55,4.21a3.49,3.49,0,0,0-.8.63l-1.52,1.23c-.77.62-1.6,1.27-2.49,2s-1.75,1.36-2.57,2S94.3,37.86,94,38.11a24.09,24.09,0,0,1,2.24-5.25c1-1.76,2-3.39,3-4.87s1.85-2.76,2.57-3.8a5.53,5.53,0,0,0,1.08-2,1.84,1.84,0,0,0-.48-1.12A6,6,0,0,0,101.15,20a7.06,7.06,0,0,0-1.71-.78,6.86,6.86,0,0,0-1.94-.29q-.45,0-1.23.78a13.87,13.87,0,0,0-1.67,2.12,6.94,6.94,0,0,0-1.3-2A3.06,3.06,0,0,0,91,18.91a13,13,0,0,0-6.7,1.89,22.88,22.88,0,0,0-5.65,4.73,24.82,24.82,0,0,0-3.95,6.14,18.86,18.86,0,0,0-.73,1.9l-.61.52a32.76,32.76,0,0,1-3.53,2.64,17.93,17.93,0,0,1-4,1.94,8.23,8.23,0,0,1-4.16.33A2,2,0,0,1,60,38a3.36,3.36,0,0,1-.34-1.82,7.28,7.28,0,0,1,.45-2,8.73,8.73,0,0,1,.74-1.6,4,4,0,0,0,1.23,1.37,3.42,3.42,0,0,0,2.12.64,7.2,7.2,0,0,0,3.91-1.16,14,14,0,0,0,3.2-2.79,16.26,16.26,0,0,0,2.2-3.31,6.78,6.78,0,0,0,.81-2.79,4.91,4.91,0,0,0-1.6-4.1A5.88,5.88,0,0,0,69,19.13a10.32,10.32,0,0,0-4.77,1.52,24.31,24.31,0,0,0-5.28,4,25.11,25.11,0,0,0-4.32,5.7A17.22,17.22,0,0,0,53.84,32c-.26.23-.6.5-1,.83l-2.5,2c-.89.72-1.75,1.39-2.56,2s-1.38,1-1.68,1.3a25.08,25.08,0,0,1,2.23-5.17c1-1.77,2-3.39,3-4.88s1.85-2.75,2.57-3.8a5.94,5.94,0,0,0,1.08-1.93,1.8,1.8,0,0,0-.49-1.12,6,6,0,0,0-1.22-1.11,6.09,6.09,0,0,0-1.72-.82,6.47,6.47,0,0,0-1.93-.3v-.07a7.75,7.75,0,0,0-1.94.26c-.69.17-1.39.36-2.08.55.89-2.18,1.12-3.88.67-5.09s-1.54-1.83-3.28-1.83a6.84,6.84,0,0,0-3,.67,7.95,7.95,0,0,0-4.39,7.07,3.24,3.24,0,0,0,1,2.57,5.74,5.74,0,0,0,2.38,1.23c-.59.84-1.22,1.71-1.86,2.6s-1.33,1.75-2.05,2.57-1.42,1.59-2.12,2.31l-.41.4-3.2,2.58c-1.26,1-2.52,2-3.75,2.94l3.08-5.88Q30,29.1,31,27c.69-1.39,1.24-2.51,1.63-3.35a8.23,8.23,0,0,0,.6-1.42,1.84,1.84,0,0,0-.48-1.11,5.06,5.06,0,0,0-1.27-1.08,7.55,7.55,0,0,0-1.75-.78,6.47,6.47,0,0,0-1.93-.3q-.15,0-.6.45a8.73,8.73,0,0,0-.89,1c-.3.4-.59.77-.86,1.11s-.43.55-.48.6A6.55,6.55,0,0,0,23.74,20a3.16,3.16,0,0,0-2.53-1,12.83,12.83,0,0,0-6.73,1.94A24.42,24.42,0,0,0,4.76,31.86,15.2,15.2,0,0,0,3.27,38a9.43,9.43,0,0,0,.45,2.94A7.76,7.76,0,0,0,5,43.28a4.83,4.83,0,0,0,1.86,1.49,4.38,4.38,0,0,0,2.34.33A5.42,5.42,0,0,0,11.65,44a16.41,16.41,0,0,0,2.53-2.38c.82-1,1.61-2,2.38-3s1.5-2.07,2.2-3c-.4.79-.86,1.69-1.38,2.68s-1.07,2-1.64,3-1.12,2-1.64,3-1,1.82-1.37,2.57q-2.76,2-5.1,3.79a41.34,41.34,0,0,0-4,3.46A19.38,19.38,0,0,0,1,57.24a5.28,5.28,0,0,0-1,2.9,8.05,8.05,0,0,0,1.71,5.28,5,5,0,0,0,4,2.09c.59,0,1.43-.62,2.53-1.86a49.79,49.79,0,0,0,3.68-4.88c1.37-2,2.83-4.31,4.39-6.92s3.12-5.27,4.66-8q3.27-2.46,6.36-4.91t5.54-4.77a10,10,0,0,0,1.49-1.82c1.35-1.32,2.61-2.61,3.76-3.87a55,55,0,0,0,4.8-6l1.86-.23.75-.14c-.45.94-1,2.09-1.53,3.46s-1.13,2.75-1.68,4.16-1,2.8-1.37,4.14a12.87,12.87,0,0,0-.56,3.27A13,13,0,0,0,40.6,42a6.24,6.24,0,0,0,.63,1.75,2.79,2.79,0,0,0,.75.89,1.14,1.14,0,0,0,.67.26A5,5,0,0,0,45,43.73q1.6-1.15,3.39-2.64t3.38-2.94l1.09-1a8.67,8.67,0,0,0,1.82,5.46,6,6,0,0,0,4.95,2.27A12.79,12.79,0,0,0,65,43.65a27.09,27.09,0,0,0,5-3,33.66,33.66,0,0,0,3.21-2.77,7.74,7.74,0,0,0,1.63,5,5.21,5.21,0,0,0,4.24,2A3.74,3.74,0,0,0,81.2,44a19.17,19.17,0,0,0,2.46-2.27c.84-.92,1.7-1.95,2.56-3.09s1.68-2.26,2.42-3.35a18.31,18.31,0,0,0-.44,3.87A12.45,12.45,0,0,0,88.46,42a6.24,6.24,0,0,0,.63,1.75,2.6,2.6,0,0,0,.78.89,1.32,1.32,0,0,0,.71.26,5,5,0,0,0,2.27-1.15c1.07-.77,2.19-1.65,3.39-2.64s2.33-2,3.42-3c.87-.79,1.53-1.4,2-1.85a22.53,22.53,0,0,0-.43,4.16,11,11,0,0,0,.11,1.45,5,5,0,0,0,.45,1.45,3.31,3.31,0,0,0,.86,1.11,2,2,0,0,0,1.34.45,1.31,1.31,0,0,0,.52-.07.6.6,0,0,0,.29-.08,11.86,11.86,0,0,0,2.28-1.56c1-.79,2-1.66,3-2.61s2-1.83,2.9-2.68l.47-.44a16.83,16.83,0,0,0-.1,1.71,10.93,10.93,0,0,0,.38,3.24,4.84,4.84,0,0,0,.85,1.71,1.9,1.9,0,0,0,1,.67,3.89,3.89,0,0,0,.78.11,4.41,4.41,0,0,0,2.23-1.15c1-.77,2-1.65,3.17-2.64s2.18-2,3.2-2.94l1.08-1a8.78,8.78,0,0,0,1.82,5.5,6,6,0,0,0,5,2.27,12.76,12.76,0,0,0,5.36-1.23,26.76,26.76,0,0,0,5-3,32.14,32.14,0,0,0,3.36-2.92,26,26,0,0,0-.15,2.66,9.56,9.56,0,0,0,.11,1.45,4.7,4.7,0,0,0,.44,1.45,3.44,3.44,0,0,0,.86,1.11,2,2,0,0,0,1.34.45c.59,0,1-.17,1.12-.52s.44-.77,1-1.71A42.5,42.5,0,0,1,153.92,39q1.79-2.23,4.54-5.13a69.87,69.87,0,0,1,6.7-6.11A46,46,0,0,0,163,33.57a19.25,19.25,0,0,0-.89,5.58,12.45,12.45,0,0,0,.26,2.83,6.24,6.24,0,0,0,.63,1.75,2.78,2.78,0,0,0,.74.89,1.16,1.16,0,0,0,.67.26,5,5,0,0,0,2.35-1.15q1.59-1.15,3.38-2.64c1.19-1,2.34-2,3.43-2.94.75-.67,1.34-1.21,1.79-1.63a22.93,22.93,0,0,0-.38,3.9,11,11,0,0,0,.11,1.45,5,5,0,0,0,.45,1.45,3.42,3.42,0,0,0,.85,1.11,2,2,0,0,0,1.34.45,1.34,1.34,0,0,0,.53-.07.67.67,0,0,0,.29-.08,11.56,11.56,0,0,0,2.27-1.56c1-.79,2-1.66,3-2.61s2-1.83,2.9-2.68,1.54-1.46,1.94-1.86A7.13,7.13,0,0,0,190,34.35l.64-.63c1.2-1.19,2.29-2.39,3.28-3.58,0,1.44.09,3,.11,4.69s0,3.33,0,4.92a24.36,24.36,0,0,1-2.68,1,8.6,8.6,0,0,1-2.45.38,4.46,4.46,0,0,1-1.42-.19,5.94,5.94,0,0,1-.85-.37,2.71,2.71,0,0,1-.52-.37.56.56,0,0,0-.41-.19c-.15,0-.32.24-.52.71A2.6,2.6,0,0,0,185,42.2a2.09,2.09,0,0,0-1.16.6,2.18,2.18,0,0,0-.52.89,1.1,1.1,0,0,0,.11.82.88.88,0,0,0,.82.37c.45,0,1,.47,1.57,1.42s1.26,2,2,3.08a20.79,20.79,0,0,0,2.49,3.09,4.07,4.07,0,0,0,2.94,1.42,6,6,0,0,0,3.8-1.12,7.3,7.3,0,0,0,2.19-3,15.06,15.06,0,0,0,1-4.24,43.58,43.58,0,0,0,.26-4.91c1-.79,2-1.59,2.94-2.38s1.73-1.54,2.42-2.24a8,8,0,0,0,1.38-1.89,6.8,6.8,0,0,0,.78-2.05c.1-.6,0-1-.26-1.19s-.81.05-1.6.74l-2.49,2c-1,.78-2.05,1.58-3.24,2.42a56.5,56.5,0,0,1,0-6.29,6,6,0,0,1,1.3-3.9,9.47,9.47,0,0,0,2.49-3.43,2.24,2.24,0,0,0-.15-2.08,2.84,2.84,0,0,0-1.75-1,10.36,10.36,0,0,0-2.15-.26,3.81,3.81,0,0,0-1.31.3,5.84,5.84,0,0,0-1.56.93,11,11,0,0,0-1.53,1.53,8.86,8.86,0,0,0-1.26,2.08,65.87,65.87,0,0,1-4.21,5.51,28.14,28.14,0,0,1-4.2,4.17,2.58,2.58,0,0,0-.67.69l-2.08,1.62-2.53,1.93q3.85-9.38,7.22-15.67a86.7,86.7,0,0,1,6.4-10.45c1.29-.15,2.6-.31,3.94-.49l3.65-.48c1.09-.15,2-.29,2.71-.41s1.13-.19,1.23-.19c.4,0,.61.14.63.41a2.67,2.67,0,0,1-.11,1Q206.46,12.06,206.28,12.58ZM137,28.36a19.2,19.2,0,0,1,2.12-2,11.2,11.2,0,0,1,2.09-1.34,4.15,4.15,0,0,1,1.82-.49c.5,0,.56.3.19.9a9.6,9.6,0,0,1-1.83,2,18.58,18.58,0,0,1-3,2.13,8.94,8.94,0,0,1-3.35,1.22A19,19,0,0,1,137,28.36Zm-73.16,0a18.35,18.35,0,0,1,2.12-2,11.15,11.15,0,0,1,2.08-1.34,4.19,4.19,0,0,1,1.83-.49c.49,0,.56.3.18.9a9.79,9.79,0,0,1-1.82,2,18.69,18.69,0,0,1-3,2.13,8.88,8.88,0,0,1-3.35,1.22A19,19,0,0,1,63.86,28.36Zm-58.5,31C4.52,60.42,3.82,61,3.27,61c-1.28,0-1.4-.55-.33-1.64A44.11,44.11,0,0,1,8.26,55,41.39,41.39,0,0,1,5.36,59.36ZM21.1,28.17q-1.76,2.56-3.61,4.8a26.6,26.6,0,0,1-3.65,3.69A4.86,4.86,0,0,1,10.72,38c-.5-.05-.7-.44-.6-1.19a9.12,9.12,0,0,1,1-2.75,29.11,29.11,0,0,1,2.16-3.54,26.09,26.09,0,0,1,2.94-3.49,18,18,0,0,1,3.35-2.68,6.42,6.42,0,0,1,3.38-1.08,3.17,3.17,0,0,1,1.12.15Q22.86,25.61,21.1,28.17Zm20.13-7.85a2,2,0,0,1-1.41-.71,1.47,1.47,0,0,1-.26-1.15,1.9,1.9,0,0,1,.63-1.08,1.7,1.7,0,0,1,1.19-.48c.55,0,.78.32.71,1A7.88,7.88,0,0,1,41.23,20.32Zm52.18,3.27c0,.05-.35.44-.9,1.16s-1.25,1.61-2.12,2.68-1.81,2.21-2.83,3.42-2,2.35-2.94,3.39-1.78,1.91-2.53,2.6-1.26,1-1.56,1c-.5,0-.69-.35-.59-1.07a9.11,9.11,0,0,1,1-2.72,29.11,29.11,0,0,1,2.16-3.54A29.43,29.43,0,0,1,86,27a18.57,18.57,0,0,1,3.31-2.72,6.27,6.27,0,0,1,3.35-1.08,4.34,4.34,0,0,1,1,.08A1,1,0,0,1,93.41,23.59Zm99.36,23.75a.93.93,0,0,1-.82.3,2.28,2.28,0,0,1-1-.49,8,8,0,0,1-1-1c-.35-.4-.69-.82-1-1.27h.67a13,13,0,0,0,4.17-.67A6.43,6.43,0,0,1,192.77,47.34Z" /></g></g></svg>

                    <Link to="/about">
                        <a className="button">ABOUT</a>
                    </Link>

                </div>

                <div className="right-side">
                    {/* <div className="contents"> */}

                        <div className="gradient-item">
                            <div className="gradient-div-1">
                                <svg className="svg-hidden" viewBox="-21 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m186.667969 416c-49.984375 0-90.667969-40.683594-90.667969-90.667969v-218.664062h-37.332031c-32.363281 0-58.667969 26.300781-58.667969 58.664062v288c0 32.363281 26.304688 58.667969 58.667969 58.667969h266.664062c32.363281 0 58.667969-26.304688 58.667969-58.667969v-37.332031zm0 0"/><path d="m469.332031 58.667969c0-32.40625-26.261719-58.667969-58.664062-58.667969h-224c-32.40625 0-58.667969 26.261719-58.667969 58.667969v266.664062c0 32.40625 26.261719 58.667969 58.667969 58.667969h224c32.402343 0 58.664062-26.261719 58.664062-58.667969zm0 0"/></svg>
                                <p className="text-hidden">COPY CSS</p>
                            </div>
                            <p>Cotton Candy</p>
                        </div>

                        <div className="gradient-item">
                            <div className="gradient-div-2">

                            </div>
                            <p>Blue Waves</p>
                        </div>

                        <div className="gradient-item">
                            <div className="gradient-div-1">

                            </div>
                            <p>Gradient 1</p>
                        </div>

                        <div className="gradient-item">
                            <div className="gradient-div-1">

                            </div>
                            <p>Gradient 1</p>
                        </div>

                        <div className="gradient-item">
                            <div className="gradient-div-1">

                            </div>
                            <p>Gradient 1</p>
                        </div>

                        <div className="gradient-item">
                            <svg height="512pt" viewBox="-21 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m186.667969 416c-49.984375 0-90.667969-40.683594-90.667969-90.667969v-218.664062h-37.332031c-32.363281 0-58.667969 26.300781-58.667969 58.664062v288c0 32.363281 26.304688 58.667969 58.667969 58.667969h266.664062c32.363281 0 58.667969-26.304688 58.667969-58.667969v-37.332031zm0 0"/><path d="m469.332031 58.667969c0-32.40625-26.261719-58.667969-58.664062-58.667969h-224c-32.40625 0-58.667969 26.261719-58.667969 58.667969v266.664062c0 32.40625 26.261719 58.667969 58.667969 58.667969h224c32.402343 0 58.664062-26.261719 58.664062-58.667969zm0 0"/></svg>
                            <div className="gradient-div-1">

                            </div>
                            <p>Gradient 1</p>
                        </div>





                    {/* </div> */}
                </div>

            </div>
        </div>

    );
}

export default MainPage;
