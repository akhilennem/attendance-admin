import Vue from 'vue'
import VueRouter from 'vue-router'

//User
import DatewiseAttend from '../views/DatewiseAttend.vue';
import LateApprove from '../views/LateApprove.vue';
//Admin

import Admin from '../views/Admin.vue';
import AdminAbout from '../views/Admin/AdminAbout';
import DailyAttend from '../views/DailyAttend.vue';
import AdminHome from '../views/AdminHome.vue';
import AdminProfile from '../views/AdminProfile.vue';
import AdminRegister from '../views/AdminRegister.vue';
import ForgetPassword from '../views/ForgetPassword.vue';
import IndividualAttend from '../views/IndividualAttend.vue';
import OtpEnter from '../views/OtpEnter.vue';
import StudentDetails from '../views/StudentDetails.vue';
import ConfirmPassword from '../views/ConfirmPassword.vue';

Vue.use(VueRouter)

const routes = [
 
  {
    path: '/',
    redirect: 'Admin',
   
  },
  {
    path: '/datewiseattend',
    name: 'datewiseattend',
    component: DatewiseAttend
  },
  {
    path: '/lateapprove',
    name: 'lateapprove',
    component: LateApprove
  },

  //Admin
  {
    path: '/adminhome',
    name: 'adminhome',
    component: AdminHome
  },
  {
    path: '/adminprofile',
    name: "adminprofile",
    component: AdminProfile
  },
  {
    path: '/adminregister',
    name: 'adminregister',
    component: AdminRegister
  },
  {
    path: '/adminabout',
    name: 'adminabout',
    component: AdminAbout
  },
  {
    path: '/dailyattend',
    name: 'dailyattend',
    component: DailyAttend
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  },
  {
    path: '/confirmpassword',
    name: 'confirmpassword',
    component: ConfirmPassword
  },
  {
    path: '/forgetpassword',
    name: 'forgetpassword',
    component: ForgetPassword
  },
  {
    path: '/individualattend',
    name: 'individualattend',
    component: IndividualAttend
  },
  {
    path: '/otp',
    name: 'otp',
    component: OtpEnter
  },
  {
    path: '/studentdetails',
    name: 'studentdetails',
    component: StudentDetails
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
