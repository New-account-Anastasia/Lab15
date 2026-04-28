import {Routes,Route } from 'react-router-dom';
import './style.css';
function News(){
    return (
        <p><h1>News</h1></p>
    )
}
function About(){
    return (
        <h1>"Южный Федеральный Университет"</h1>
    )
}
function Contacts (){
    return (
        <h2> 7 (123) 876-43-67</h2>
    )
}
export function Main(){
    return ( <div class="Main">
<div class="main_container">
<section class="flex-center"><img scr="https://i.pinimg.com/736x/33/53/9c/33539c66f2343f3fd0ab34324f098277.jpg" width={200} alt='img'/> </section>
<article class="flex-center">
    <Routes>
        <Route path='/news' element={<News />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contacts' element={<Contacts />}/>
        <Route path='/*' element={<h3>Некорректная ссылка</h3>}/>
    </Routes>
</article>
<aside class="flex-center">Sukharevskaya Anastasia Alekseevna</aside>
</div>
    </div>
    )
}

export default Main;