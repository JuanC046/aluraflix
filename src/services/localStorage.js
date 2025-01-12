import { v4 as uuid } from "uuid";
const LOCAL_STORAGE_KEY = "videos";
import { urlVideoHandle } from "./handles";
const getLocalStorageData = () => {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
};

const setLocalStorageData = (data) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
};

export const getData = async () => {
    try {
        const data = getLocalStorageData();
        return data;
    } catch (error) {
        console.error("Error fetching data", error);
    }
};

export const postData = async (video) => {
    console.log("Posting data", video);
    try {
        const data = getLocalStorageData();
        data.push({ ...video, id: uuid(),
            video: urlVideoHandle(video.video)
         });
        setLocalStorageData(data);
        return video;
    } catch (error) {
        console.error("Error posting data", error);
    }
};

export const putData = async (video) => {
    console.log("Putting data", video);
    try {
        const data = getLocalStorageData();
        const index = data.findIndex((v) => v.id === video.id);
        if (index !== -1) {
            data[index] = video;
            setLocalStorageData(data);
            return video;
        } else {
            throw new Error("Video not found");
        }
    } catch (error) {
        console.error("Error putting data", error);
    }
};

export const deleteData = async (id) => {
    console.log("Deleting data", id);
    try {
        const data = getLocalStorageData();
        const newData = data.filter((video) => video.id !== id);
        setLocalStorageData(newData);
        return id;
    } catch (error) {
        console.error("Error deleting data", error);
    }
};

export const getVideo = async (id) => {
    try {
        const data = getLocalStorageData();
        console.log("IN GET VIDEO: Id", id);
        console.log("Data", data);
        const video = data.find((video) => video.id === id);
        return video;
    } catch (error) {
        console.error("Error fetching video", error);
    }
};
