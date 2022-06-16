<template>
  <div>
      <div>
          <h2>{{ title }}</h2>
      </div>
    
      <!-- Text Field with Input Binding -->
    <div v-if="formBuild">
        <form class="blogForm" v-if="!formSubmitted">
            <div>
                <label>Name</label><br>
                <input v-bind:type="type1" v-model.lazy="blog.name" placeholder="Enter Your Name" required />
                <!-- .lazy is used to show the data once when it is entered -->
            </div>

            <div>
                <label>Email</label><br>
                <input v-bind:type="type1" v-model.lazy="blog.email" placeholder="Enter Your Email" required />
            </div>

            <div>
                <label>Mobile</label><br>
                <input v-bind:type="type2" v-model.lazy="blog.mobile" placeholder="Enter Your Number" required />
            </div>

           <div>
               <label>Gender</label><br>
               <select v-model="blog.gender">
                    <option disabled>Select One</option>
                    <option v-for="(genders, index) in selectGender" :key="index">
                        {{ genders }}
                    </option>
               </select>
           </div>

            <div class="labelClass">
                <label>Fav Color:</label>
                <p>Red</p>
                <input v-bind:type="type3" value="Red" v-model="blog.color" required />
                 <p>Blue</p>
                <input v-bind:type="type3" value="Blue" v-model="blog.color" required />
                 <p>White</p>
                <input v-bind:type="type3" value="White" v-model="blog.color" required />
                 <p>Yellow</p>
                <input v-bind:type="type3" value="Yellow" v-model="blog.color" required />
            </div>
        </form>
       
       <div v-if="formSubmitted">
           <h2>The Data is stored</h2>
           <p>Thank You!</p>
       </div>

        <div v-bind:class="{previewData, bgColor}">
            <div>
                <h2>Preview Data:</h2>
            </div>
            <div>
                <table>
                    <tbody>
                        <tr class="dataTable">
                            <th v-for="(field, index) in blog.fields" :key="index">{{ field }}</th>
                        </tr>
                        <tr class="dataTable">
                            <td>{{ blog.name }}</td>
                            <td>{{ blog.email }}</td>
                            <td>{{ blog.mobile }}</td>
                            <td>{{ blog.gender }}</td>
                            <td> 
                                <ul v-for="(colors, index) in blog.color" :key="index">
                                    <li>{{ colors }}</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="buttonClass" v-if="!formSubmitted">
            <button v-on:click="formSubmit()">Submit</button>
            <button class="postBtn" v-on:click.prevent="formPost()">Post Data</button>
            <button class="clearBtn" v-on:click="clearStorage()">Clear Data</button>
            <button v-on:click="formStatusBtn()">View Data</button>
        </div>
    </div>

    <div v-else>
        <component :is="'blog-record'"></component>
    </div> 
   

  </div>
</template>

<script>
import BlogRecord from '@/components/VueBlog/BlogRecord'

export default {
    components:{
        'blog-record': BlogRecord
    },

    data(){
        return{
            title: 'Users Blog/Record in Vue',
            type1: 'text',
            type2: 'number',
            type3: 'checkbox',
            selectGender: ['Male', 'Female', 'Others'],
            formSubmitted: false,
            previewData: true,
            bgColor: false,
            formBuild: true,
            blog:{
                name: '',
                email: '',
                mobile: '',
                gender: '',
                color: [],
                fields: ['Name', 'Email', 'Mobile', 'Gender', 'Fav.Color'],
            },
        }
    },
    methods:{
        formSubmit: function(){
            var localStorageStatus = JSON.parse(localStorage.getItem('User-Blog-Data'));

            if(!this.blog.name || !this.blog.email || !this.blog.mobile || !this.blog.gender || !this.blog.color){
                alert('Please enter all the details');
            }
            else if(this.blog.mobile.length < 10 || this.blog.mobile.length > 10){
                alert('Please enter a valid mobile number')
            }
            else if(localStorageStatus != null){
                var UpdateDataArr = {
                    'name':   this.blog.name, 
                    'email':  this.blog.email, 
                    'mobile': this.blog.mobile, 
                    'gender': this.blog.gender,
                    'color':  this.blog.color
                }
                localStorageStatus.push(UpdateDataArr);
                localStorage.setItem('User-Blog-Data', JSON.stringify(localStorageStatus));
                this.formSubmitted = true
                return this.bgColor = true
            }
            else{
                var dataArr = [{
                    'name':   this.blog.name, 
                    'email':  this.blog.email, 
                    'mobile': this.blog.mobile, 
                    'gender': this.blog.gender,
                    'color':  this.blog.color
                }]
                localStorage.setItem('User-Blog-Data', JSON.stringify(dataArr));
                this.formSubmitted = true;
                return this.bgColor = true
            }
        },

        clearStorage: function(){
            localStorage.clear('User-Blog-Data');
            alert('Data Cleared!')
        },

        formPost: function(){
            if(!this.blog.name || !this.blog.email || !this.blog.mobile || !this.blog.gender || !this.blog.color){
                alert('Please enter all the details');
            }
            else if(this.blog.mobile.length < 10 || this.blog.mobile.length > 10){
                alert('Please enter a valid mobile number')
            }
            else{
                fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',

                    body: JSON.stringify({
                        userId: 1,
                        title: this.title,
                        body: {
                            name: this.blog.name,
                            email: this.blog.email,
                            gender: this.blog.gender,
                            color: this.blog.color,
                        }
                    }),

                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                    this.formSubmitted = true;
                    return this.bgColor = true
                })
                .catch((err) =>{
                    console.log(err);
                })
            }
        },
        formStatusBtn: function(){
            this.formBuild = false
        }
    }
}
</script>

<style scoped>
label{
    font-size: 20px;
}
input, label, button, select{
    padding: 10px;
    width: auto;
}
.clearBtn{
    background-color: rgb(230, 45, 45);
}
.postBtn{
    background-color: rgb(239, 206, 19);
}
button{
    background-color: green;
    border: none;
    color: white;
    cursor: pointer;
}
.blogForm{
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
}
.previewData{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
}
.bgColor{
    background-color: rgb(222, 255, 220);
}
.dataTable{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 20px;
}
.buttonClass{
    padding-top: 50px;
}
.labelClass{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
}
</style>