import { handleSubmit } from './js/formHandler'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

// adds main image to screen
import mainImage from './images/nlp.jpg'
const imageContainer = document.getElementById('main_image');
imageContainer.src = mainImage;

// adds logo to screen
import logo from './images/logo.png'
const logoContainer = document.getElementById('logo');
logoContainer.src = logo;

// Js files are being exported to 'Client' library (Output set in webpack.dev.js)
export {
    handleSubmit
}