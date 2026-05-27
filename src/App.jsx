
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import FirstPage from './Components/FirstPage/FirstPage'
import OnBoarding from './Components/OnBoarding/OnBoarding'
import Login from './Components/Login/Login'
import { AnimatePresence } from 'framer-motion'
import PageTransition from './Components/PageTransition/PageTransition'
import SignUp from './Components/Signup/Signup'
import Home from './Components/Home/Home'
import MyOrders from './Components/MyOrders/MyOrders'
import CancelOrder from './Components/CancelOrder/CancelOrder'
import LeaveReview from './Components/LeaveReview/LeaveReview'
import MyProfile from './Components/MyProfile/MyProfile'
import DeliveryAddress from './Components/DeliveryAddress/DeliveryAddress'
import AddAddress from './Components/AddAddress/AddAddress'
import ConfirmOrder from './Components/ConfirmOrder/ConfirmOrder'
import Payment from './Components/Payment/Payment'
import TrackOrder from './Components/TrackOrder/TrackOrder'
import Filter from './Components/Filter/Filter'
import FoodList from './Components/FoodList/FoodList'
import FoodDetail from './Components/FoodDetail/FoodDetail'
import BestSeller from './Components/BestSeller/BestSeller'
import Recommendations from './Components/Recommendations/Recommendations'
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition><OnBoarding /></PageTransition>
        } />
        <Route path="/GetStarted" element={
          <PageTransition><FirstPage /></PageTransition>
        } />
        <Route path="/login" element={
          <PageTransition><Login /></PageTransition>
        } />
        <Route path="/signup" element={
          <PageTransition><SignUp /></PageTransition>
        } />
        <Route path="/home" element={
          <PageTransition><Home /></PageTransition>
        } />
        <Route path="/orders" element={
          <PageTransition><MyOrders /></PageTransition>
        } />
        <Route path="/Cancel" element={
          <PageTransition><CancelOrder /></PageTransition>
        } />
        <Route path="/leave-review" element={
          <PageTransition><LeaveReview /></PageTransition>
        } />
        <Route path="/myProfile" element={
          <PageTransition><MyProfile /></PageTransition>
        } />
        <Route path="/address" element={
          <PageTransition><DeliveryAddress /></PageTransition>
        } />
        <Route path="/addaddress" element={
          <PageTransition><AddAddress /></PageTransition>
        } />
        <Route path="/confirmOrder" element={
          <PageTransition><ConfirmOrder /></PageTransition>
        } />
        <Route path="/payment" element={
          <PageTransition><Payment /></PageTransition>
        } />
        <Route path="/TrackOrder" element={
          <PageTransition><TrackOrder /></PageTransition>
        } />
        <Route path="/Filter" element={
          <PageTransition><Filter /></PageTransition>
        } />
        <Route path="/food-list/:category" element={
          <PageTransition><FoodList /></PageTransition>
        } />
        <Route path="/food/:id" element={
          <PageTransition><FoodDetail /></PageTransition>
        } />
        <Route path="/bestSeller" element={
          <PageTransition><BestSeller /></PageTransition>
        } />
        <Route path="/recommendations" element={
          <PageTransition><Recommendations /></PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  );
};

function App() {

  return (
    <>
    <BrowserRouter>
     <AnimatedRoutes />
    </BrowserRouter>
    </>
  )
}

export default App
