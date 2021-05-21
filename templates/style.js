const style = `
html, body {
    max-width: 100% !important;
    
}
body {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.banner-bar {
    justify-content: center;
    align-items: center;
    height: 20vh;
    background-color: rgba(59, 21, 68, 0.842);
    width: 100%;
    color: #ffffff;
    display: flex;
    
}
h1 {
       font-size: 8vw;
}
p {
    font-family: sans-serif;
    position: relative;
    left: 12px;
}
h2 {
    font-family: sans-serif;
    position: relative;
    font-size: 17px;
    left: 12px;
}
.member-card {
    padding: 0 20px 0 20px;
    width: 250px;
    height: 34vh;
    margin-bottom: 5vh;
    background-color: rgb(240, 238, 238);
    box-shadow: 2px 5px 5px black;
    border-top-left-radius: 10px;
    margin-right: 20px;
}
.card-container {
    position: absolute;
    top: 26vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

}
.card-top {
    width: 100%;
    border-top-left-radius: 10px;
    background-color: rgb(34, 151, 230);
    border: 2px solid rgb(252, 250, 251);
    border-radius: 7px;
}
.card-bottom {
    display: flex;
    flex-direction: column;
    align-content: center;
}
`

module.exports = style;