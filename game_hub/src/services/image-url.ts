const getCroppedImageUrl = (url: string) => {
    const cropImgUrl = 'https://media.rawg.io/media/crop/600/400'
    const index = url.indexOf('games/')
    const updatedImageUrl = cropImgUrl +'/'+ url.slice(index);
    return updatedImageUrl
}


export default getCroppedImageUrl
