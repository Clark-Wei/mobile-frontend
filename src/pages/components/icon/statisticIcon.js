import React from 'react';

function StatisticIcon(props) {
    const {width, height} = props

    return (
        <span role="img" aria-label="video-camera" className="anticon anticon-video-camera ant-menu-item-icon">
            <svg t="1624952324898" className="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="2793" width={width} height={height}><path
                d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#28A5C6" p-id="2794"></path><path
                d="M969.6 856H40.8c-4.8 0-8-3.2-8-8s3.2-8 8-8h928.8c4.8 0 8 3.2 8 8s-4 8-8 8z" fill="#233E49"
                p-id="2795"></path><path
                d="M284 814.4c0 17.6-14.4 32-32 32H176c-17.6 0-32-14.4-32-32V562.4c0-17.6 14.4-32 32-32h76c17.6 0 32 14.4 32 32v252z"
                fill="#FF4848" p-id="2796"></path><path
                d="M485.6 814.4c0 17.6-14.4 32-32 32h-76c-17.6 0-32-14.4-32-32v-144c0-17.6 14.4-32 32-32h76c17.6 0 32 14.4 32 32v144z"
                fill="#FBD000" p-id="2797"></path><path
                d="M686.4 814.4c0 17.6-14.4 32-32 32h-76c-17.6 0-32-14.4-32-32V442.4c0-17.6 14.4-32 32-32h76c17.6 0 32 14.4 32 32v372z"
                fill="#75B600" p-id="2798"></path><path
                d="M888 814.4c0 17.6-14.4 32-32 32h-76c-17.6 0-32-14.4-32-32v-488c0-17.6 14.4-32 32-32h76c17.6 0 32 14.4 32 32v488z"
                fill="#3AD0F9" p-id="2799"></path><path
                d="M408 508c-1.6 0-3.2 0-4-1.6L205.6 382.4c-4-2.4-4.8-7.2-2.4-11.2 2.4-4 7.2-4.8 11.2-2.4l192 120.8 197.6-245.6 2.4-2.4 207.2-111.2c4-2.4 8.8-0.8 11.2 3.2 2.4 4 0.8 8.8-3.2 11.2L615.2 255.2 414.4 504.8c-1.6 2.4-4 3.2-6.4 3.2z"
                fill="#233E49" p-id="2800"></path><path
                d="M410.4 490.4m-49.6 0a49.6 49.6 0 1 0 99.2 0 49.6 49.6 0 1 0-99.2 0Z" fill="#3AD0F9"
                p-id="2801"></path><path d="M609.6 248.8m-49.6 0a49.6 49.6 0 1 0 99.2 0 49.6 49.6 0 1 0-99.2 0Z"
                                         fill="#FF4848" p-id="2802"></path><path
                d="M209.6 375.2m-49.6 0a49.6 49.6 0 1 0 99.2 0 49.6 49.6 0 1 0-99.2 0Z" fill="#FBD000"
                p-id="2803"></path><path d="M814.4 136.8m-49.6 0a49.6 49.6 0 1 0 99.2 0 49.6 49.6 0 1 0-99.2 0Z"
                                         fill="#75B600" p-id="2804"></path><path
                d="M212 432c-32.8 0-60-27.2-60-60s27.2-60 60-60 60 27.2 60 60-27.2 60-60 60z m0-103.2c-24 0-43.2 19.2-43.2 43.2 0 24 19.2 43.2 43.2 43.2 24 0 43.2-19.2 43.2-43.2 0-24-19.2-43.2-43.2-43.2zM412 552c-32.8 0-60-27.2-60-60s26.4-60 60-60 60 27.2 60 60-26.4 60-60 60z m0-103.2c-24 0-43.2 19.2-43.2 43.2 0 24 19.2 43.2 43.2 43.2 24 0 43.2-19.2 43.2-43.2 0-24-19.2-43.2-43.2-43.2z"
                fill="#233E49" p-id="2805"></path><path
                d="M252 800H176c-17.6 0-32-18.4-32-36v49.6c0 17.6 14.4 32 32 32h76c17.6 0 32-14.4 32-32v-49.6c0 17.6-14.4 36-32 36z"
                fill="#EA291C" p-id="2806"></path><path
                d="M453.6 800h-76c-17.6 0-32-18.4-32-36v49.6c0 17.6 14.4 32 32 32h76c17.6 0 32-14.4 32-32v-49.6c0 17.6-14.4 36-32 36z"
                fill="#F4B10B" p-id="2807"></path><path
                d="M856 796h-76c-17.6 0-32-14.4-32-32v49.6c0 17.6 14.4 32 32 32h76c17.6 0 32-14.4 32-32v-49.6c0 17.6-14.4 32-32 32z"
                fill="#00B3F9" p-id="2808"></path><path
                d="M608 304c-31.2 0-56-24.8-56-56s24.8-56 56-56 56 24.8 56 56-24.8 56-56 56z m0-96.8c-22.4 0-40.8 18.4-40.8 40.8s18.4 40.8 40.8 40.8 40.8-18.4 40.8-40.8-18.4-40.8-40.8-40.8z"
                fill="#233E49" p-id="2809"></path><path
                d="M654.4 800h-76c-17.6 0-32-18.4-32-36v49.6c0 17.6 14.4 32 32 32h76c17.6 0 32-14.4 32-32v-49.6c0 17.6-14.4 36-32 36z"
                fill="#58990D" p-id="2810"></path><path
                d="M816 192c-31.2 0-56-24.8-56-56s24.8-56 56-56 56 24.8 56 56-24.8 56-56 56z m0-96.8c-22.4 0-40.8 18.4-40.8 40.8s18.4 40.8 40.8 40.8 40.8-18.4 40.8-40.8-18.4-40.8-40.8-40.8zM256 856H176c-22.4 0-40-17.6-40-40V568c0-22.4 17.6-40 40-40h80c22.4 0 40 17.6 40 40v248c0 22.4-17.6 40-40 40zM176 544c-13.6 0-24 10.4-24 24v248c0 13.6 10.4 24 24 24h80c13.6 0 24-10.4 24-24V568c0-13.6-10.4-24-24-24H176zM456 856H376c-22.4 0-40-17.6-40-40V672c0-22.4 17.6-40 40-40h80c22.4 0 40 17.6 40 40v144c0 22.4-17.6 40-40 40zM376 648c-13.6 0-24 10.4-24 24v144c0 13.6 10.4 24 24 24h80c13.6 0 24-10.4 24-24V672c0-13.6-10.4-24-24-24H376zM656 856H576c-22.4 0-40-17.6-40-40V448c0-22.4 17.6-40 40-40h80c22.4 0 40 17.6 40 40v368c0 22.4-17.6 40-40 40zM576 424c-13.6 0-24 10.4-24 24v368c0 13.6 10.4 24 24 24h80c13.6 0 24-10.4 24-24V448c0-13.6-10.4-24-24-24H576zM856 856h-72c-22.4 0-40-17.6-40-40V328c0-22.4 17.6-40 40-40h72c22.4 0 40 17.6 40 40v488c0 22.4-17.6 40-40 40z m-72-552c-13.6 0-24 10.4-24 24v488c0 13.6 10.4 24 24 24h72c13.6 0 24-10.4 24-24V328c0-13.6-10.4-24-24-24h-72z"
                fill="#233E49" p-id="2811"></path><path
                d="M239.2 384c-4.8 0-8.8-3.2-8.8-8 0-9.6-8.8-16.8-19.2-16.8-10.4 0-19.2 8-19.2 16.8 0 4-4 8-8.8 8-4.8 0-8.8-3.2-8.8-8 0-17.6 16-32 36-32s36 14.4 36 32c1.6 4.8-2.4 8-7.2 8zM439.2 496c-4.8 0-8.8-3.2-8.8-8 0-9.6-8.8-16.8-19.2-16.8-10.4 0-19.2 8-19.2 16.8 0 4-4 8-8.8 8s-7.2-3.2-7.2-8c0-17.6 16-32 36-32s36 14.4 36 32c0 4.8-4 8-8.8 8zM632.8 256c-4 0-7.2-3.2-7.2-8 0-9.6-8-16.8-16.8-16.8-9.6 0-16.8 8-16.8 16.8 0 4-3.2 8-7.2 8s-7.2-3.2-7.2-8c0-17.6 14.4-32 32-32s32 14.4 32 32c-1.6 4.8-4.8 8-8.8 8zM840.8 144.8c-4 0-7.2-3.2-7.2-8 0-9.6-8-17.6-16.8-17.6-9.6 0-16.8 8-16.8 17.6 0 4-3.2 8-7.2 8s-7.2-3.2-7.2-8c0-18.4 14.4-32.8 32-32.8s32 14.4 32 32.8c-1.6 4-4.8 8-8.8 8zM256 744c-4.8 0-8-3.2-8-8v-32c0-4.8 3.2-8 8-8s8 3.2 8 8v32c0 4.8-3.2 8-8 8zM256 680c-4.8 0-8-4-8-8V576.8c0-4.8-4-8-8-8h-55.2c-4.8 0-8 4-8 8 0 4.8-4 8-8 8-4.8 0-8-4-8-8 0-13.6 11.2-24 24.8-24h55.2c13.6 0 24.8 11.2 24.8 24V672c-1.6 4-5.6 8-9.6 8zM456 783.2c-4.8 0-8-3.2-8-8V681.6c0-4-4-8-8.8-9.6h-52.8c-4.8 0-8-3.2-8-8s3.2-8 8-8h55.2c12.8 2.4 22.4 12.8 22.4 25.6v93.6c0 4-3.2 8-8 8zM656 752c-4.8 0-8-3.2-8-8V664c0-4 3.2-8 8-8s8 3.2 8 8v80c0 4.8-3.2 8-8 8zM656 623.2c-4.8 0-8-3.2-8-8V453.6c0-2.4-0.8-4-2.4-5.6-0.8-0.8-2.4-0.8-4-0.8h-55.2c-4.8 0-8-3.2-8-8s3.2-8 8-8h52.8c5.6-0.8 12 0 16 4 5.6 4 8.8 11.2 8.8 17.6v160.8c0 5.6-3.2 9.6-8 9.6zM856 714.4c-4.8 0-8-3.2-8-8V640c0-4.8 3.2-8 8-8s8 3.2 8 8v66.4c0 4-3.2 8-8 8zM856 596c-4.8 0-8-3.2-8-8V335.2v-1.6c0-2.4-0.8-3.2-0.8-4-0.8-0.8-2.4-1.6-4.8-1.6h-54.4c-4.8 0-8-3.2-8-8s3.2-8 8-8h52.8c6.4-0.8 12.8 1.6 17.6 6.4 4 4.8 6.4 11.2 5.6 16.8v252.8c0 4.8-3.2 8-8 8z"
                fill="#FFFFFF" p-id="2812"></path><path
                d="M592 113.6c0-3.2-3.2-6.4-8-7.2l-14.4-2.4c-4-0.8-8.8-4.8-8.8-8.8l-3.2-15.2c-0.8-4-4-8-7.2-8s-6.4 3.2-7.2 8l-2.4 15.2c-0.8 4-4.8 8.8-8.8 8.8l-15.2 2.4c-4 0.8-8 4-8 7.2s3.2 6.4 8 7.2l15.2 2.4c4 0.8 8.8 4.8 8.8 8.8l2.4 15.2c0.8 4 4 8 7.2 8s6.4-3.2 7.2-8l2.4-16.8c0.8-4 4.8-8 8.8-8.8L584 120c4.8-0.8 8-3.2 8-6.4zM123.2 480c0-3.2-3.2-6.4-8-7.2l-15.2-2.4c-4-0.8-8.8-4.8-8.8-8.8l-2.4-15.2c-0.8-4-4-8-7.2-8s-6.4 3.2-7.2 8L72 461.6c-0.8 4-4.8 8.8-8.8 8.8l-15.2 2.4c-4 0.8-8 4-8 7.2s3.2 6.4 8 7.2l16 1.6c4 0.8 8.8 4.8 8.8 8.8l2.4 15.2c0.8 4 4 8 7.2 8s6.4-3.2 7.2-8l2.4-16.8c0.8-4 4.8-8 8.8-8.8l14.4-0.8c4.8-0.8 8-4 8-6.4zM336.8 228.8c0-3.2-3.2-6.4-8-7.2l-15.2-2.4c-4-0.8-8.8-4.8-8.8-8.8l-2.4-15.2c-0.8-4-4-8-7.2-8s-6.4 3.2-7.2 8l-2.4 15.2c-0.8 4-4.8 8.8-8.8 8.8l-15.2 2.4c-4 0.8-8 4-8 7.2s3.2 6.4 8 7.2l15.2 2.4c4 0.8 8.8 4.8 8.8 8.8l2.4 15.2c0.8 4 4 8 7.2 8s6.4-3.2 7.2-8l2.4-16.8c0.8-4 4.8-8 8.8-8.8l14.4-0.8c4.8-0.8 8.8-4 8.8-7.2zM432 320c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32z m0-48.8c-9.6 0-16.8 8-16.8 16.8 0 9.6 8 16.8 16.8 16.8 9.6 0 16.8-8 16.8-16.8 0-9.6-7.2-16.8-16.8-16.8z"
                fill="#FFFFFF" opacity=".5" p-id="2813"></path></svg>
        </span>
    );
}

export default StatisticIcon;
