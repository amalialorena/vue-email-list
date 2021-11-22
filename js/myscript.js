//1. Creare un'array vuoto
//2. Pushare dentro l'array 10 email generati dalla api
//3. attraverso un ciclo stampare in pagina tutti gli elementi dell'array
var app = new Vue({
    el: '#root',
    data: {
        emails: [],
    },
    mounted() {
        const self = this;

        for(let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function(result){
                self.emails.push(result.data.response);
            });
        }  
    }



})