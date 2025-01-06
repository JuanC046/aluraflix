const url = "http://localhost:3000/videos";
export const getData = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data", error);
    }
};

export const postData = async (video) => {
    console.log("Posting data", video);
    const newVideo = {
        title: video.title,
        category: video.category,
        image: video.image,
        video: video.video,
        description: video.description,
    };
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newVideo),
        });
        return response;
    } catch (error) {
        console.error("Error posting data", error);
    }
};

export const putData = async (video) => {
    console.log("Putting data", video);
    try {
        const response = await fetch(`${url}/${video.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(video),
        });
        return response;
    } catch (error) {
        console.error("Error putting data", error);
    }
};

export const deleteData = async (id) => {
    console.log("Deleting data", id);
    try {
        const response = await fetch(`${url}/${id}`, {
            method: "DELETE",
        });
        return response;
    } catch (error) {
        console.error("Error deleting data", error);
    }
};

export const getVideo = async (id) => {
    try {
        const response = await fetch(`${url}/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching video", error);
    }
};
