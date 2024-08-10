export const metadata = {
    title: 'Fancy Testimonials Slider - Cruip Tutorials',
    description: 'Page description',
}

import Testimonials from '@/testimonials/Testimonials'

export default function FancyTestimonialSliderPage() {

    const testimonials = [
        {
            img: "https://c.pxhere.com/photos/dd/9d/people_cowboy_male_hat_person_western_country_man-867925.jpg!d",
            quote: "The ability to capture responses is a game-changer. If a user gets tired of the sign up and leaves, that data is still persisted. Additionally, it's great to select between formats.",
            name: 'Jessie J',
            role: 'Acme LTD'
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDLcaoMqauKXsMZwJOio8tds2bjfB3WK3HnQ&s",
            quote: "Having the power to capture user feedback is revolutionary. Even if a participant abandons the sign-up process midway, their valuable input remains intact.",
            name: 'Nick V',
            role: 'Malika Inc.'
        },
        {
            img: "https://c.pxhere.com/photos/8e/28/people_hoodie_male_person_man_young_portrait_one-867919.jpg!d",
            quote: "The functionality to capture responses is a true game-changer. Even if a user becomes fatigued during sign-up and abandons the process, their information remains stored.",
            name: 'James',
            role: 'Panda AI'
        }
    ]

    return (
        <Testimonials testimonials={testimonials} />
    )
}