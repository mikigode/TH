(async function ($) {
    let server_host = "http://localhost:1337";
    let response = await fetch(`${server_host}/api/blogs?populate=thumbnail`);
    if (!response.ok) {
        return;
    }
    let json = await response.json(); 
    let blogs = json.data;
    renderBlogs($("#blogs-container"), blogs);
})(jQuery);

async function renderBlogs(element, blogs) {
    blogs.forEach(blog => {
        let server_host = "http://localhost:1337";
        element.append(`
            <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s">
                <div class="blog-item">
                    <div class="overflow-hidden rounded">
                        <img src="${server_host + (blog?.attributes?.thumbnail?.data?.attributes?.url || '')}" class="img-fluid w-100" alt="">
                    </div>
                    <div class="blog-content mx-4 d-flex rounded bg-light">
                        <div class="text-dark bg-primary rounded-start">
                            <div class="h-100 p-3 d-flex flex-column justify-content-center text-center">
                                <p class="fw-bold mb-0">16</p>
                                <p class="fw-bold mb-0">Sep</p>
                            </div>
                        </div>
                        <a href="${blog.id}" class="h5 lh-base my-auto h-100 p-3">${blog.attributes.title}</a>
                    </div>
                </div>
            </div>
        `);
    });
}

// (async function ($) {
//     let server_host = "http://localhost:1337";
//     let response = await fetch(`${server_host}/api/testimonials?populate=thumbnail`);
//     if (!response.ok) {
//         return;
//     }
//     let json = await response.json();
//     let testimonials = json.data;
//     renderTestimonials($("#testimonials-container"), testimonials);
// })(jQuery);

// function renderTestimonials(element, testimonials) {
//     testimonials.forEach((testimonial) => {
//         let server_host = "http://localhost:1337";
//         element.append(`
//         <div class="testimonial-item rounded bg-light">
//             <div  class="d-flex mb-3">
//               <img
//                 src="${server_host + (testimonial?.attributes?.thumbnail?.data?.attributes?.url || '')}"
//                 class="img-fluid rounded-circle flex-shrink-0"
//                 alt=""
//               />
//               <div class="position-absolute" style="top: 15px; right: 20px">
//                 <i class="fa fa-quote-right fa-2x"></i>
//               </div>
//               <div class="ps-3 my-auto">
//                 <h4 class="mb-0">${testimonial.attributes.name}</h4>
//                 <p class="m-0">Profession</p>
//               </div>
//             </div>
//             <div class="testimonial-content">
//               <div class="d-flex">
//                 <i class="fas fa-star text-primary"></i>
//                 <i class="fas fa-star text-primary"></i>
//                 <i class="fas fa-star text-primary"></i>
//                 <i class="fas fa-star text-primary"></i>
//                 <i class="fas fa-star text-primary"></i>
//               </div>
//               <p class="fs-5 m-0 pt-3">
//               ${testimonial.attributes.description}
//               </p>
//             </div>
//           </div>
//         `);
//     });
// }