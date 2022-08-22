<template>
    <div>
        <input type="text" placeholder="name" v-model="createUser">
        <button @click="create">create</button>
        <hr>
        <select name="users" id="users" v-model="user">
            <!-- <option v-for="user in users" :value="user.id">{{ user.name}}</option> -->
        </select>
        <br>
        <input type="date" v-model="date">
        <br>
        <select name="status" id="status" v-model="status">
            <option :value="true">Present</option>
            <option :value="false">Absent</option>
        </select>
        <br>
        <button :disabled="!user" @click="submit">Submit</button>
        <!-- <table>
            <tr>
                <th>Name</th>
                <th v-for="day in no_of_days.getDate()">{{day}}</th>
            </tr>
            <tr v-for="day in add_days">
                <td>{{day.name}}</td>
                <td style="width: 30px; height:30px;" v-for="no_of_days.getDate()" class="dot" :style="{'background-color' : day[no] ? 'green' : 'red'}"></td>
            </tr>
        </table> -->
    </div>
</template>

<script>
    Date.prototype.addDays = function(days){
        this.setDate(this.getDate() + parseInt(days));
        return this;
    };
    new Vue({
        data(){
            var d = new Date(),
            month = d.getMonth(),
            year = d.getYear();
        return{
            createUser:'',
            user:'',
            date:'',
            status: true,
            userId: 1,
            attendanceId: 1,
            users:[{
                id: 1,
                name: 'kani',
                attendances:[]
            }],
            month: month,
            year: year,
            no_of_days: new Date(year, month + 1, 0)
        }
        },
        computed:{
            add_days(){
                var vm = this
                var add_days= _.map(vm.users, function(user){
                    var index = 0
                    while( index < vm.no_of_days.getDate()){
                        user[index+1] = false
                        index++
                    }
                    index = 0
                    while(index < user.attendances.length){
                        var d = new Date(user.attendances[index].start_date).addDays(1)
                        if(d.getDate()){
                            user[d.getDate()] = true
                        }
                        index++
                    }
                    return user
                })
                return add_days
           }
        },
        methods: {
            submit(){
                var vm = this
                var clone = Object.assign({}, {user: vm.user, date: vm.date, status: vm.status})
                var index = _.findindex(vm.users, ['id', clone.user])
                if(index != -1){
                    if(clone.status){
                        ++vm.attendanceId
                        vm.users[index].attendances.push({id: vm.attendanceId, start_date: clone.date})
                    }else{
                        var absentIndex = _.findindex(vm.users, [index].attendances, ['start_date', clone.user])
                        vm.users[index].attendances.splice(absentIndex, 1)
                    }
                }
            },
            create(){
                var vm = this
                ++vm.userId
                var clone = Object.assign({}, {
                    id: vm.userId,
                    name: vm.createUser,
                    attendances: []
                })
                vm.users.push(clone)
            }
        }
    }).$mount('#app')

</script>
<style>
.dot {
    height: 10px;
    width: 10px;
    border-radius: 50%;
}
</style>