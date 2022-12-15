var app = new Vue({
    el: '#app',
    data: {
        arrayDischi: [],
        arrayGeneri: [],
        selectGenere: ''

    },
    mounted() {

        axios.get('./api/index.php')

            .then((res) => {

                this.arrayDischi = res.data

                this.arrayDischi.forEach((elem) => {


                    //condizione
                    if (!this.arrayGeneri.includes(elem.genre)) {
                        this.arrayGeneri.push(elem.genre);
                    }

                })

            }
            )
    },
    beforeUpdate() {

    },
    methods: {

        ricercaProdotti() {

            if (this.selectGenere != 'tutti') {

                axios.get(`./api/index.php?genre=${this.selectGenere}`)
                    .then((res) => {
                        this.arrayDischi = res.data
                    })

            } else {
                
                axios.get(`./api/index.php`)
                    .then((res) => {
                        this.arrayDischi = res.data

                    })
            }

        }

    }
})