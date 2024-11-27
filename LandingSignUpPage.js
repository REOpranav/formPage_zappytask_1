class LandingPageSignUpForm extends HTMLElement {
    constructor() {
        super();

        this.companyname = this.getAttribute('companyName')
        this.imagesURI = this.getAttribute('imagesURI')
        this.imageURLAlt = this.getAttribute('imagesAlt')
        this.footerContent = this.getAttribute('footerContent')
        this.placeHolderName = this.getAttribute('text')
        this.ratio = this.getAttribute('radio')
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' })

        // Add your custom styles inside the shadow DOM
        const style = document.createElement('style');
        style.textContent = `
                * {
                    color: white;
                    padding: 0;
                    margin: 0;
                }

                :host {
                    --fonts:"Capriola", sans-serif;
                    --padding: 10px;
                }

                main {
                    display: flex;
                    justify-content: space-between;
                    aligh-item:center;
                    min-height: 90vh;
                    max-height: 90vh;
                }

                .rgb {
                    background: rgb(230,109,234);
                    background: linear-gradient(126deg, rgba(230,109,234,1) 29%, rgba(5,12,113,1) 78%); 
                    width: 50%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }

                .rgb>header {
                    background: none;
                }

                .rgb>header>p {
                    background: none;
                    padding: 10px;
                    display: flex;
                    align-items: center;
                    margin-top: 40px;
                }

                .rgb img {
                    background: none;
                    margin-left: 50px;
                    min-width: 40px;
                    max-width: 40px;
                    min-height: 40px;
                    max-height: 40px;
                    border-radius: 10px;
                }

                .rgb>header>p>span {
                    background: none;
                    font-size: 20px;
                    margin-left: 10px;
                    font-weight: 600;
                    font-family: var(--fonts);
                    font-style: normal;
                    font-family: var(--fonts);
                }

                .rgb>footer {
                    background: none;
                    margin-bottom: 50px;
                    display: flex;
                    justify-content: left;
                }

                .rgb>footer>p {
                    font-size: 40px;
                    background: none;
                    margin-left: 50px;
                    font-family: var(--fonts);
                    word-wrap: break-word; 
                    overflow-wrap: break-word;
                    max-width: 500px; 
                    font-weight: 900;
                }

                .forms {
                    width: 50%;
                }
                    
                a{
                    color: blue;
                }

                section{
                    display: flex;
                    justify-content: center;
                    align-item : center;
                    font-family: var(--fonts);
                    text-align: left;
                    width: 50%;
                    background-color:black;
                }

                section>div{
                    width: 75%;
                    display: flex;
                    flex-direction : column;
                    justify-content: center;
                    align-item : center;
                }

                section h3,section p{
                    padding: var(--padding);
                }

                /* these are form styles */

                section div form {
                    margin-top: 10px;
                    padding: var(--padding);   
                    max-height: 50%;
                    overflow :auto                   
                }

                section div form>p {
                    padding: var(--padding);
                    margin-left: 20px;
                }

                section div form p input {
                    background-color:black;
                    transition: 0.4s all ease-in-out;
                    margin-left: 10px;
                    padding: var(--padding);
                    min-width: 80%;
                    border-radius: 40px;
                    border: 1px solid #ddd;
                }
                
                form input:hover{
                    color : grey ;
                    cursor: pointer;
                } 

                form input:focus{
                  outline : none;
                  border : 1px solid blue 
                }
                
               input[type="submit"]{
                    background-color:#000C66; 
                    color: white;             
                    padding: 10px 20px;       
                    border: none;             
                    cursor: pointer;
                    min-width: 85%;
                    font-family: var(--fonts);
                }

                input[type="submit"]:hover {
                    background-color: #1E90FF;
                    color : white;
                }

                input[type="submit"]:active {
                    border : none
                    background-color: #3e237d; 
                }

                section button{
                    font-family: var(--fonts);
                    padding:var(--padding);
                    transition: 0.4s all ease-in-out;
                    background-color:#050A30;
                    border: none;
                    min-width: 83%;
                    margin-left: 10px;
                    border-radius: 40px;
                    display:flex;
                    justify-content:space-evenly;
                    align-items: center;
                }

                section div button:hover{
                    cursor: pointer ;
                    border-radius: 30px;
                }

        /* Media query for small screen devices */
        @media (max-width: 1008px) {
            .rgb{
                display:none
            } 

            .forms,section {
                width: 100%;
            }


            section {
                text-align: center; /* Center align text */
                padding : 10px;
                border-radius : 10px
            }

            section>div {
                width: 100%; /* Slight margin for padding */
            }

            section h3, section p {
                text-align: left;
                font-size: 16px; /* Adjust text size */
            }

            input[type="submit"] {
                min-width: 90%;
                padding: 8px 16px; 
            }

            section button {
                min-width: 90%; 
                padding: 8px; 
            }
        }

            `;

        shadow.appendChild(style);

        const main = document.createElement('main');
        const rgbSectionTag = document.createElement('section')
        const rgbHeaderTag = document.createElement('header')
        const rgbHeaderPTag = document.createElement('p')
        const rgbImageyTag = document.createElement('img')
        const rgbSpantag = document.createElement('span')
        const rgbFooterTag = document.createElement('footer')
        const rgbFooterP = document.createElement('p')

        const formSideSection = document.createElement('section')
        const formSideSectiondiv = document.createElement('div')
        const formSideHeader = document.createElement('h3')

        const form = document.createElement('form')
        const formSidePTag = document.createElement('p')

        const setFormSideSignUp = document.createElement('p')
        const setFormSideSignUpWithGoogle = document.createElement('p')

        const setSection = main.appendChild(rgbSectionTag)
        setSection.className = "rgb"

        const setHeader = setSection.appendChild(rgbHeaderTag)
        const setHeaderPTage = setHeader.appendChild(rgbHeaderPTag)

        const setHeaderImage = setHeaderPTage.appendChild(rgbImageyTag)
        setHeaderImage.src = this.imagesURI
        setHeaderImage.alt = this.imageURLAlt

        const setHeaderImageSpanTag = setHeaderPTage.appendChild(rgbSpantag)
        setHeaderImageSpanTag.textContent = this.companyname

        const setFooterTag = setSection.appendChild(rgbFooterTag);
        const setFooterPTag = setFooterTag.appendChild(rgbFooterP)
        setFooterPTag.textContent = this.footerContent

        const setFormSideSection = main.appendChild(formSideSection)
        const setFormSideSectioniv = setFormSideSection.appendChild(formSideSectiondiv)
        const setFormSideHeader = setFormSideSectioniv.appendChild(formSideHeader)
        setFormSideHeader.textContent = 'SignUp for Free.'
        const setFormSidePTag = setFormSideSectioniv.appendChild(formSidePTag)
        setFormSidePTag.textContent = "Let's Sign Up quickly to get started."


        let inputArray = [] // storing the Form attributes
        for (let a = 0; a < this.attributes.length; a++) {
            if (this.attributes[a].localName == 'text' || this.attributes[a].localName == 'password' || this.attributes[a].localName == 'email' || this.attributes[a].localName == 'number' || this.attributes[a].localName == 'submit' || this.attributes[a].localName == 'date' || this.attributes[a].localName == 'file' || this.attributes[a].localName == 'range') {
                inputArray.push(this.attributes[a].localName)
            }
        }

        //this code for appending Form detail
        for (let a = 0; a < inputArray.length; a++) {
            const pTag = document.createElement('p')

            const labelForElement = document.createElement('label')
            labelForElement.setAttribute('for', inputArray[a] == 'text' ? this.placeHolderName : inputArray[a] == 'radio' ? this.ratio : inputArray[a])

            const createInput = document.createElement('input')
            createInput.type = inputArray[a]
            createInput.placeholder = inputArray[a] == 'text' ? this.placeHolderName : inputArray[a]
            createInput.id = inputArray[a]
            createInput.name = inputArray[a] == 'text' ? this.placeHolderName : inputArray[a]
            createInput.value = inputArray[a] == 'submit' ? 'Sign Up' : inputArray[a] == 'radio' ? this.ratio : null

            pTag.appendChild(labelForElement)
            pTag.appendChild(createInput)
            pTag.appendChild(document.createElement('br'))
            pTag.appendChild(document.createElement('span'))

            form.appendChild(pTag)
            setFormSideSectioniv.appendChild(form)
        }

        //this function for finding error in form feild
        function setError(ele, message) {
            const findParent = ele.parentElement
            const childAccessForCss = findParent.querySelector('input')
            childAccessForCss.style.border = '1px solid red'
            const findChild = findParent.querySelector('span')
            findChild.textContent = message
            findChild.style = `font-family: monospace;
                font-size: x-small;
                color: red;   
                text-align: left;
                margin-left: 20px;`
        }

        //this () for cancel error when it successfully enter
        function setSuccess(ele) {
            const findparent = ele.parentElement
            const childAccessForCss = findparent.querySelector('input')
            childAccessForCss.style.border = '1px solid #ddd'

            const findChild = findparent.querySelector('span')
            findChild.textContent = ''
            findChild.style.cssText = null
        }

        // this () for mail check
        function mailCheck(value) {
            return String(value).matchAll(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault()

            form.addEventListener('input', (e) => {
                e.preventDefault()
                //this code for getting value from thta id and setting error (if u have doublt in this function contact me in cliq)
                for (let a = 0; a < inputArray.length; a++) {
                    let userValue = this.shadowRoot.getElementById(inputArray[a])
                    if (userValue.value == '') {
                        setError(userValue, '*required')
                    } else if (userValue.type.toLowerCase() === 'password' ? userValue.value.length < 8 : null) {
                        setError(userValue, 'must be in 8 charector')
                    } else if (userValue.type.toLowerCase() == 'number' ? userValue.value.length < 10 || userValue.value.length > 10 : null) {
                        setError(userValue, 'not a valid numnber')
                    } else if (userValue.type.toLowerCase() == 'number' ? userValue.value.match(/[A-Za-z]/) : null) {
                        setError(userValue, 'charectors are not allowed')
                    } else {
                        setSuccess(userValue)
                    }
                }
            })

            //this code for getting value from thta id and setting error (if u have doublt in this function contact me in cliq)
            for (let a = 0; a < inputArray.length; a++) {
                let userValue = this.shadowRoot.getElementById(inputArray[a])
                if (userValue.value == '') {
                    setError(userValue, '*required')
                } else if (userValue.type.toLowerCase() === 'password' ? userValue.value.length < 8 : null) {
                    setError(userValue, 'must be in 8 charector')
                } else if (userValue.type.toLowerCase() == 'number' ? userValue.value.length < 10 || userValue.value.length > 10 : null) {
                    setError(userValue, 'not a valid numnber')
                } else if (userValue.type.toLowerCase() == 'number' ? userValue.value.match(/[A-Za-z]/) : null) {
                    setError(userValue, 'charectors are not allowed')
                } else {
                    setSuccess(userValue)
                }
            }
        })



        const setSignUp = setFormSideSectioniv.appendChild(setFormSideSignUp)
        setSignUp.innerHTML = 'Already Have an account ? <a href="#"> Sign In</a>'
        setSignUp.style.fontSize = '10px'
        setSignUp.style.textAlign = 'center'

        const formSideGoogleSignUp = setFormSideSectioniv.appendChild(setFormSideSignUpWithGoogle)
        formSideGoogleSignUp.innerHTML = '<button id="googleSignUp"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAzFBMVEVHcEz////////+/v77+/vx8fL9/f309fX+/v739/f////09PXOz8/5+vr8/P3////////29vf///////84qlf8wAdGiPX8/PzsUUTqQjQsqFLrSj3S3/w6g/TqPCs0gPQgpUf85+bv9P+63sL62Nb+8ef4ycbw+PJkunkeePP81HXwgGv0jhzc5/3o9efX7N5Fr19Uj/WQy562zPr2trL94KDzoJrzoJv80Gjyl5H94qgyh9v7xzihsSp+wYV1sE5ZtXBmmvUynoWKrvzKDGT6AAAAE3RSTlMAW+TTeBLcHLMt1WsKzfUznkBIxSDAuAAAAUZJREFUKJFtktligkAMRUFZxKVuDMOAggpu1apVu+/t//9TkxBU1PsySQ4hlyGadpTd0fWOrV2R3eqyWhe80j1RpYCc7pmcI2tyaZimQw6bOTMplU9hpKIofJSUmgwtTCYq9EFhqKIJ5lbGdGIRAGhUQLNX6wRLOA2Y8vdpuvfVOJtaOjhdhL56yYrjU8cGFsRSLc4/x+DPfxBiSZN6LMlXUYXzVghBT8/7pPkdxFX28yzEO8HYI8U9dlQudMZx3AeInWWe+SrExxrhCLTre3E+M3P7FXznLn887z53a2PwGbjBLLvUP2jcYUC/FYdOA9d1g22SbN1fbizT9bUxXA+QguB4G2GlfbIFqw1i0GCzKmzDDQ1LZgPQLKHk5rAJpmSj0ykH0jxArW4V79yqF1bMkEckjYvFrTWIy0btApFsx7m68Ff1D4OdMHbngtKsAAAAAElFTkSuQmCC" alt="Goole Images"> Sign Up With Google</button>'
        formSideGoogleSignUp.style.marginLeft = '30px'
        formSideGoogleSignUp.style.textAlign = 'left'

        shadow.appendChild(main)
    }
}

customElements.define('landing-signup-form', LandingPageSignUpForm);