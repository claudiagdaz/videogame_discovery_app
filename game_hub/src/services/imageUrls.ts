import noImage from "../assets/no-image-placeholder-6f3882e0.webp"

const getCroppedImageUrl = (url: string) => {
    if (!url) return noImage;
    const searchTerm = 'media/';
    const indexOfSearchTerm= url.indexOf(searchTerm) + searchTerm.length;
    const baseUrl = url.slice(0, indexOfSearchTerm);
    const urlKey = url.slice(indexOfSearchTerm, url.length)
    const cropInstruction = "crop/600/400/"

    const updatedImageUrl = baseUrl + cropInstruction + urlKey


    return updatedImageUrl
}


//note some images are baseURL/media/games/key.jpg
//others are baseURL/media/screenshots/key.jpg sooo current cropped image doesn't work for them
//Need to rewrite code to be dependent on /media/ 

export default getCroppedImageUrl;
