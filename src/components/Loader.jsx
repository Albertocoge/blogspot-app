import LoadingGif from '../images/loading.gif'

const Loader = () => {
 return (
   <div className='loader'>
        <div calssName="loader__image">
            <img src={LoadingGif} alt="" />
        </div>

   </div>

 )

}

export default Loader