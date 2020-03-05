// alert("double click to decorate");


const images = [
'img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg', 'img6.jpg', 'img7.jpg', 'img8.jpg', 'img9.jpg', 'img10.jpg', 'img11.jpg', 'img12.jpg', 'img13.jpg', 'img14.jpg', 'img15.jpg', 'img16.jpg', 'img17.jpg', 'img18.jpg', 'img19.jpg', 'img20.jpg', 'img21.jpg', 'img22.jpg', 'img23.jpg',


]

let i=0


function placeImage(x, y){


		const nextImage = images [i]

		const img = document.createElement('img')

		img.setAttribute('src', nextImage)
		img.style.left = x + 'px'
		img.style.top = y + 'px'



		document.body.append(img)


		i = i + 1
 
}



document.addEventListener('dblclick', function(event){
	event.preventDefault()
	placeImage(event.pageX, event.pageY)

})


// source: https://www.superhi.com/video/making-a-clickable-digital-collage-with-javascript








