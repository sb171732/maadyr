<template>
  <div class="about w3-padding">
    <h4>Чаа оюн</h4> 
    <p class="w3-text-red">"Чангыс каттап ойнаар!"</p>
    <el-button v-if="exst" @click="rand_zag()" disabled>Эгелээр</el-button>
    <el-button v-else @click="rand_zag()">Эгелээр</el-button>
    
    <el-divider></el-divider>
    
    <el-row>
        <el-col v-for="el in arr_view" :key="el.id" style="margin: 5px;min-height: 150px;" :span="10" >
           <div :class="'container '+mas[el-1].bg" :style="'display:'+mas[el-1].display" @click="select(mas[el-1])">
             <!-- <p v-if="mas[arr_view[el-1]].isA">{{ mas[arr_view[el-1]].true_a}}</p>
             <p v-else>{{ mas[arr_view[el-1]].q}}</p> -->
              <!-- {{ cont_view(mas[el-1]) }} -->
              <p v-if="mas[el-1].isA">{{ mas[el-1].true_a }}</p>
              <p v-else>{{ mas[el-1].q }} ?</p>
          </div>
        </el-col>
        
    </el-row>
    
    
  </div>
</template>
<script>
 import {store} from '../store'
 import bridge from '@vkontakte/vk-bridge';
export default {
  data() {
     return{
        mas:[],
        exst:false,
        defeat:0,
        ender:0,
        arr_view:[], // массив случайных 12 чисел
        col:0,
        sel_mas:[]  // массив для выбора ответов
     }
  },
  computed:{
    zag(){
      return store.state.zag
    },
    users(){
      return store.state.users
    }
    

  }
  ,
  methods:{
    
    cont_view(el){
       console.log(el.q)
       console.log(el.isA)
    },
    rand_view(){   // функция отбирает 12 случайных чисел
      this.arr_view=[]
      do {
            const randomNumber = Math
                .floor(Math.random() * 12) + 1
            if (!this.arr_view.includes(randomNumber)) {
              this.arr_view.push(randomNumber);
            }
        } 
        while (this.arr_view.length <12 );
    },
    rand_zag(){   // функция отбирает 6 случайных записей из массива
       this.mas = []
       this.ender = 0 
        do {
            const randomNumber = Math
                .floor(Math.random() * 70) + 1
            if (this.mas.length!=0){
            
                if (!this.mas.includes( {
                                    id:this.zag[randomNumber].id,
                                    isA:false,
                                    display:'block',
                                    bg:'aqua',
                                    q:this.zag[randomNumber].q,
                                    true_a:this.zag[randomNumber].true_a,
                                    hint:this.zag[randomNumber].hint,
                                    })) 
            {
              this.mas.push(
                          {
                            id:this.zag[randomNumber].id,
                            isA:false,
                            bg:'aqua',
                            display:'block',
                            q:this.zag[randomNumber].q,
                            true_a:this.zag[randomNumber].true_a,
                            hint:this.zag[randomNumber].hint,
                          }  
              );
            }}
            else {
              this.mas.push(
                          {
                            id:this.zag[randomNumber].id,
                            isA:false,
                            bg:'aqua',
                            display:'block',
                            q:this.zag[randomNumber].q,
                            true_a:this.zag[randomNumber].true_a,
                            hint:this.zag[randomNumber].hint,
                          }  
              );
            }
        } 
        while (this.mas.length <6 );
        
        this.get_a()
        
    },
    get_a(){   // функция добавляет ответы в массив mas 
       for (let i in this.mas){
         
        
              this.mas.push({  
                  id:this.mas[i].id+'a',
                  isA:true,
                  bg:'green',
                  display:'block',
                  q:this.mas[i].q,
                  true_a:this.mas[i].true_a,
                  hint:this.mas[i].hint,
                })
       }    

       this.rand_view()
       this.defeat = 0
    },
    view(){  // просморт содержимого массивов
      
      console.log(this.arr_view)
      console.log(this.mas)
    }
    ,
    select(el){   // обработчик нажатия на блок
      console.log(this.sel_mas)
      if (!el.isA){   // если не ответ то обнуляем и пушим вопрос
        this.sel_mas = []
        for (let a in this.mas){
                if (!this.mas[a].isA){
                  this.mas[a].bg = 'aqua'
                }
              }
        this.sel_mas.push({true_a:el.true_a,id:el.id})
        this.mas.filter((n)=>{    // фон выделения
            return n.id.match(el.id)
          })[0].bg = 'selected'
      } else {        // если ответ то проверяем на количество
        if (this.sel_mas.length<2){
          this.sel_mas.push({true_a:el.true_a,id:el.id})
          if (this.sel_mas[0].true_a==this.sel_mas[1].true_a){
            this.$notify({
                title: 'Шын',
                message: ' ',
                type: 'success'
              });
              
              this.ender++
              for (let m in this.mas){
                this.mas.filter((n)=>{    // фон выделения
                    return n.id.match(this.sel_mas[m].id)
                  })[0].display = 'none'
              }
              for (let a in this.mas){
                if (!this.mas[a].isA){
                  this.mas[a].bg = 'aqua'
                }
              }
          } else {
            this.$notify({
                title: 'Меге',
                message: '',
                type: 'error'
              });
              this.defeat++
              for (let a in this.mas){
                if (!this.mas[a].isA){
                  this.mas[a].bg = 'aqua'
                }
              }
          }
        }
         
        
      }

       this.end()      


      
         
    },
    get_id(){
      bridge.send('VKWebAppGetUserInfo')
          .then((data) => { 
            if (data.id) {
              // Данные пользователя получены
             
              this.start(data.id)
            }    
          })
          .catch((error) => {
            // Ошибка
            console.log(error);
          });
    },
    start(id){
        for (let u in this.users){
          console.log(this.users[u].vkid)
          if (this.users[u].vkid==id){
            
            this.exst = true
          }
        }
    }
    
  }
  ,
  watch:{
    ender(to){
      console.log(to)
      if (to==6){
        bridge.send('VKWebAppGetUserInfo')
          .then((data) => { 
            if (data.id) {
              // Данные пользователя получены
              console.log(data.id);
              console.log(data.last_name);
              console.log(data.first_name);
              store.dispatch('addUser',{fname:data.first_name,
                lname:data.last_name,defeat:this.defeat,vkid:data.id})
              alert('Туннелинер бижитинген, четирген!')  
            }    
          })
          .catch((error) => {
            // Ошибка
            console.log(error);
          });
        
      }
    }
   

  },
  created(){
    this.get_id()
  }
}
</script>
<style>
   .container{
    min-height: 150px; 
    padding: 10px;
    
    border-radius: 10px;
    cursor: pointer;
   }
   .aqua{
    background-color:aquamarine;
   }
   .selected{
    background-color: chocolate;
   }
   .green{
    background-color: bisque;
   }

</style>