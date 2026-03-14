export async function share(title: string, text: string, imagePath: string | null = null) {
    try {
        const shareData = {
            title,
            text,
            url: location.href
        };

        if (imagePath) {
            const response = await fetch(imagePath);
            const blob = await response.blob();
            const file = new File([blob], 'image.jpg', {type: blob.type});
            shareData.files = [file];
        }

        if (navigator.canShare && navigator.canShare(shareData)) {
            await navigator.share(shareData);
        } else {
            alert('Ваш браузер не поддерживает данную функцию');
        }
    } catch (err) {
    }
}