export const urlVideoHandle = (video) => {
    return video.includes("youtube") ? video.replace("watch?v=", "embed/") : video;
}