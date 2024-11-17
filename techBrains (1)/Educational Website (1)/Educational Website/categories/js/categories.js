let containerForCoursesCategoryWebDevolopment = document.getElementById('container-for-courses-categories-web-devolopment');
let containerForCoursesCategoryGraphicDesign = document.getElementById('container-for-courses-categories-graphic-design');
let containerForCoursesCategoryMarketing = document.getElementById('container-for-courses-categories-marketing');
let containerForCoursesCategoryBusiness = document.getElementById('container-for-courses-categories-Busines');

// Show favorite course on the index
fetch('/data/products.json')
    // Parse JSON response
    .then(response => response.json())
    // Iterate over each product in the products array
    .then(products => {
        products.forEach(product => {
            // Web Devolopement courses
            if (product.TypeBussines == 'Web Devolopment'){
                // Create an anchor tag with a link to the product details page
                let linkProject = document.createElement('a');
                linkProject.setAttribute('href', `/details.html?id=${product.id}`);
                linkProject.classList.add('our-courses-container-boxes-box-link');
                containerForCoursesCategoryWebDevolopment.appendChild(linkProject);
                let wrapper = document.createElement('div');
                wrapper.classList.add('our-courses-container-boxes-box');
                linkProject.appendChild(wrapper);
                let img = document.createElement('img');
                img.setAttribute('src', product.Image);
                img.classList.add('our-courses-container-boxes-box-img');
                wrapper.appendChild(img);
                let txt = document.createElement('h1');
                txt.innerHTML = product.Name;
                wrapper.appendChild(txt); 
                let tutor = document.createElement('p');
                tutor.innerHTML = product.Tutor;
                wrapper.appendChild(tutor);
                let containerReviewStarStudent = document.createElement('div');
                containerReviewStarStudent.classList.add('our-courses-container-boxes-box-revieves-star-student');
                wrapper.appendChild(containerReviewStarStudent);
                let containerReview = document.createElement('button');
                containerReview.classList.add('our-courses-container-boxes-box-revieves');
                containerReview.innerHTML = product.Rate;
                containerReviewStarStudent.appendChild(containerReview);
                let containerStar = document.createElement('button');
                if (product.Rate >= '4' && product.Rate <= '4.4'){
                    containerStar.innerHTML = '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star">';
                } else if(product.Rate >= '4.5' && product.Rate <= '4.8') {
                    containerStar.innerHTML = '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star-half-stroke"></i>';
                } else if(product.Rate >= '4.9' && product.Rate <= '5') {
                    containerStar.innerHTML = '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> <i class="fa-solid fa-star"></i>';
                }
                containerStar.classList.add('our-courses-container-boxes-box-star')
                containerReviewStarStudent.appendChild(containerStar);
                let containerStudent = document.createElement('button');
                containerStudent.innerHTML = '(' + product.Student + ')';
                containerStudent.classList.add('our-courses-container-boxes-box-student');
                containerReviewStarStudent.appendChild(containerStudent);
                let containerPrice = document.createElement('div');
                containerPrice.classList.add('our-courses-container-boxes-box-price-container');
                wrapper.appendChild(containerPrice);
                let price = document.createElement('button');
                price.classList.add('our-courses-container-boxes-box-price');
                price.innerHTML = '$' + product.Price;
                containerPrice.appendChild(price);
            }
        });
    })
    .catch(error => console.error('Error fetching product data:', error));

// Show favorite course on the index
fetch('/data/products.json')
    // Parse JSON response
    .then(response => response.json())
    // Iterate over each product in the products array
    .then(products => {
        products.forEach(product => {
            // Web Devolopement courses
            if (product.TypeBussines == 'Graphic Design'){
                // Create an anchor tag with a link to the product details page
                let linkProject = document.createElement('a');
                linkProject.setAttribute('href', `/details.html?id=${product.id}`);
                linkProject.classList.add('our-courses-container-boxes-box-link');
                containerForCoursesCategoryGraphicDesign.appendChild(linkProject);
                let wrapper = document.createElement('div');
                wrapper.classList.add('our-courses-container-boxes-box');
                linkProject.appendChild(wrapper);
                let img = document.createElement('img');
                img.setAttribute('src', product.Image);
                img.classList.add('our-courses-container-boxes-box-img');
                wrapper.appendChild(img);
                let txt = document.createElement('h1');
                txt.innerHTML = product.Name;
                wrapper.appendChild(txt); 
                let tutor = document.createElement('p');
                tutor.innerHTML = product.Tutor;
                wrapper.appendChild(tutor);
                let containerReviewStarStudent = document.createElement('div');
                containerReviewStarStudent.classList.add('our-courses-container-boxes-box-revieves-star-student');
                wrapper.appendChild(containerReviewStarStudent);
                let containerReview = document.createElement('button');
                containerReview.classList.add('our-courses-container-boxes-box-revieves');
                containerReview.innerHTML = product.Rate;
                containerReviewStarStudent.appendChild(containerReview);
                let containerStar = document.createElement('button');
                if (product.Rate >= '4' && product.Rate <= '4.4'){
                    containerStar.innerHTML = '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star">';
                } else if(product.Rate >= '4.5' && product.Rate <= '4.8') {
                    containerStar.innerHTML = '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star-half-stroke"></i>';
                } else if(product.Rate >= '4.9' && product.Rate <= '5') {
                    containerStar.innerHTML = '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> <i class="fa-solid fa-star"></i>';
                }
                containerStar.classList.add('our-courses-container-boxes-box-star')
                containerReviewStarStudent.appendChild(containerStar);
                let containerStudent = document.createElement('button');
                containerStudent.innerHTML = '(' + product.Student + ')';
                containerStudent.classList.add('our-courses-container-boxes-box-student');
                containerReviewStarStudent.appendChild(containerStudent);
                let containerPrice = document.createElement('div');
                containerPrice.classList.add('our-courses-container-boxes-box-price-container');
                wrapper.appendChild(containerPrice);
                let price = document.createElement('button');
                price.classList.add('our-courses-container-boxes-box-price');
                price.innerHTML = '$' + product.Price;
                containerPrice.appendChild(price);
            }
        });
    })
    .catch(error => console.error('Error fetching product data:', error));

// Show favorite course on the index
fetch('/data/products.json')
    // Parse JSON response
    .then(response => response.json())
    // Iterate over each product in the products array
    .then(products => {
        products.forEach(product => {
            // Web Devolopement courses
            if (product.TypeBussines == 'Marketing'){
                // Create an anchor tag with a link to the product details page
                let linkProject = document.createElement('a');
                linkProject.setAttribute('href', `/details.html?id=${product.id}`);
                linkProject.classList.add('our-courses-container-boxes-box-link');
                containerForCoursesCategoryMarketing.appendChild(linkProject);
                let wrapper = document.createElement('div');
                wrapper.classList.add('our-courses-container-boxes-box');
                linkProject.appendChild(wrapper);
                let img = document.createElement('img');
                img.setAttribute('src', product.Image);
                img.classList.add('our-courses-container-boxes-box-img');
                wrapper.appendChild(img);
                let txt = document.createElement('h1');
                txt.innerHTML = product.Name;
                wrapper.appendChild(txt); 
                let tutor = document.createElement('p');
                tutor.innerHTML = product.Tutor;
                wrapper.appendChild(tutor);
                let containerReviewStarStudent = document.createElement('div');
                containerReviewStarStudent.classList.add('our-courses-container-boxes-box-revieves-star-student');
                wrapper.appendChild(containerReviewStarStudent);
                let containerReview = document.createElement('button');
                containerReview.classList.add('our-courses-container-boxes-box-revieves');
                containerReview.innerHTML = product.Rate;
                containerReviewStarStudent.appendChild(containerReview);
                let containerStar = document.createElement('button');
                if (product.Rate >= '4' && product.Rate <= '4.4'){
                    containerStar.innerHTML = '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star">';
                } else if(product.Rate >= '4.5' && product.Rate <= '4.8') {
                    containerStar.innerHTML = '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star-half-stroke"></i>';
                } else if(product.Rate >= '4.9' && product.Rate <= '5') {
                    containerStar.innerHTML = '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> <i class="fa-solid fa-star"></i>';
                }
                containerStar.classList.add('our-courses-container-boxes-box-star')
                containerReviewStarStudent.appendChild(containerStar);
                let containerStudent = document.createElement('button');
                containerStudent.innerHTML = '(' + product.Student + ')';
                containerStudent.classList.add('our-courses-container-boxes-box-student');
                containerReviewStarStudent.appendChild(containerStudent);
                let containerPrice = document.createElement('div');
                containerPrice.classList.add('our-courses-container-boxes-box-price-container');
                wrapper.appendChild(containerPrice);
                let price = document.createElement('button');
                price.classList.add('our-courses-container-boxes-box-price');
                price.innerHTML = '$' + product.Price;
                containerPrice.appendChild(price);
            }
        });
    })
    .catch(error => console.error('Error fetching product data:', error));

// Show favorite course on the index
fetch('/data/products.json')
    // Parse JSON response
    .then(response => response.json())
    // Iterate over each product in the products array
    .then(productsWeb => {
        productsWeb.forEach(product => {
            // Web Devolopement courses
            if (product.TypeBussines == 'Business'){
                // Create an anchor tag with a link to the product details page
                let linkProject = document.createElement('a');
                linkProject.setAttribute('href', `/details.html?id=${product.id}`);
                linkProject.classList.add('our-courses-container-boxes-box-link');
                containerForCoursesCategoryBusiness.appendChild(linkProject);
                let wrapper = document.createElement('div');
                wrapper.classList.add('our-courses-container-boxes-box');
                linkProject.appendChild(wrapper);
                let img = document.createElement('img');
                img.setAttribute('src', product.Image);
                img.classList.add('our-courses-container-boxes-box-img');
                wrapper.appendChild(img);
                let txt = document.createElement('h1');
                txt.innerHTML = product.Name;
                wrapper.appendChild(txt); 
                let tutor = document.createElement('p');
                tutor.innerHTML = product.Tutor;
                wrapper.appendChild(tutor);
                let containerReviewStarStudent = document.createElement('div');
                containerReviewStarStudent.classList.add('our-courses-container-boxes-box-revieves-star-student');
                wrapper.appendChild(containerReviewStarStudent);
                let containerReview = document.createElement('button');
                containerReview.classList.add('our-courses-container-boxes-box-revieves');
                containerReview.innerHTML = product.Rate;
                containerReviewStarStudent.appendChild(containerReview);
                let containerStar = document.createElement('button');
                if (product.Rate >= '4' && product.Rate <= '4.4'){
                    containerStar.innerHTML = '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star">';
                } else if(product.Rate >= '4.5' && product.Rate <= '4.8') {
                    containerStar.innerHTML = '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star-half-stroke"></i>';
                } else if(product.Rate >= '4.9' && product.Rate <= '5') {
                    containerStar.innerHTML = '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> <i class="fa-solid fa-star"></i>';
                }
                containerStar.classList.add('our-courses-container-boxes-box-star')
                containerReviewStarStudent.appendChild(containerStar);
                let containerStudent = document.createElement('button');
                containerStudent.innerHTML = '(' + product.Student + ')';
                containerStudent.classList.add('our-courses-container-boxes-box-student');
                containerReviewStarStudent.appendChild(containerStudent);
                let containerPrice = document.createElement('div');
                containerPrice.classList.add('our-courses-container-boxes-box-price-container');
                wrapper.appendChild(containerPrice);
                let price = document.createElement('button');
                price.classList.add('our-courses-container-boxes-box-price');
                price.innerHTML = '$' + product.Price;
                containerPrice.appendChild(price);
            }
        });
    });