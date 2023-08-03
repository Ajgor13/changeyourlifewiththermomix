class defaultHeader extends HTMLElement{
    
    ConnectedCallback(){
        this.innerHTML = `
        <div class="header-container">
            <header>
                <ul>
                    <li class="header-item"><i class="fa fa-envelope envelope-icon"></i></li>
                    <li class="header-item"><a href="mailto:greenanna100@gmail.com">greenanna100@gmail.com</a></li>
                    <li class="header-item"><i class="fa fa-phone"></i></li>
                    <li class="header-item"><a href="tel:07719755330">07719755330</a></li>
                    <li class="header-item"><a class="fab fa-facebook-f" href="https://www.facebook.com/profile.php?id=100064203331859"></a></li>
                    <li class="header-item"><a class="fab fa-tiktok" href="https://www.tiktok.com/@anna.knas.thermomix.uk?_t=8eKzBzjvg3G&_r=1"></a></li>
                </ul>
            </header>
        </div>`    
    }
}
customElements.define('default-header',defaultHeader)