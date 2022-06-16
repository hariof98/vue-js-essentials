const myFilters = {
    name: 'hari',
    age: 23,
}

console.log(myFilters);

export default{
    methods:{
        searchKeyword: function(){
            console.log(this.searchWord)
            fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
                return response.json();
            }).then((data) => {
                const myData = data.slice(0, 10);
                this.apiData.push(data);
            }).catch((err) => {
                console.log(err)
            })
        }
    },
}
