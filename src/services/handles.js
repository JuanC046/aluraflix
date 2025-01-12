export const urlVideoHandle = (video) => {
    console.log("URL VIDEO HANDLE", video);
    return video.includes("youtube") ? video.replace("watch?v=", "embed/") : video;
}