export function getPhotos(img) {
    const API_KEY= "47393342-0b139bb531c328d079618af8b";
    const URL= "https://pixabay.com/api/";
    return fetch(`${URL}?key=${API_KEY}&q=${encodeURIComponent(img)}&image_type=photo&orientation=horizontal&safesearch=true`)
        .then(response=> {
            if (!response.ok) {
                throw new Error(`Error status: ${response.status}`);
            }
            return response.json();
        })
        .then(data=> data)
        .catch(error=> {
            console.error("Error fetching:", error);
            throw error; 
        });
}