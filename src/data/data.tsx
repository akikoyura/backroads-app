import tour1 from '../assets/tour-1.jpeg';
import tour2 from '../assets/tour-2.jpeg';
import tour3 from '../assets/tour-3.jpeg';
import tour4 from '../assets/tour-4.jpeg';

export const pageLinks = [
    { id: 1, href: '#home', text: 'home' },
    { id: 2, href: '#about', text: 'about' },
    { id: 3, href: '#services', text: 'services' },
    { id: 4, href: '#tours', text: 'tours' }
]

export const socialLinks = [
    { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook' },
    { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
    { id: 3, href: 'https://www.twitter.com', icon: 'fab fa-squarespace' }
]

export const services = [
    {
        id: 1,
        icon: 'fas fa-wallet fa-fw',
        title: 'saving money',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'
    },
    {
        id: 2,
        icon: 'fas fa-tree fa-fw',
        title: 'endless hiking',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'
    },
    {
        id: 3,
        icon: 'fas fa-socks fa-fw',
        title: 'amazing comfort',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'
    }
]

export const tours = [
    {
        id: 1,
        src: tour1,
        alt: 'tour 1',
        date: 'august 26th, 2020',
        title: 'Tibet Adventure',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location: 'china',
        days: '6 days',
        price: 'from $2100'
    },
    {
        id: 2,
        src: tour2,
        alt: 'tour 2',
        date: 'october 1th, 2020',
        title: 'best of java',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location: 'indonesia',
        days: '11 days',
        price: 'from $1400'
    },
    {
        id: 3,
        src: tour3,
        alt: 'tour 3',
        date: 'september 15th, 2020',
        title: 'explore hong kong',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location: 'hong kong',
        days: '5 days',
        price: 'from $900'
    },
    {
        id: 4,
        src: tour4,
        alt: 'tour 4',
        date: 'july 20th, 2020',
        title: 'beach paradise',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location: 'bali',
        days: '8 days',
        price: 'from $1200'
    }

]