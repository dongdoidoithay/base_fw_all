
import Images  from 'next/image'

const ImageLoading = ({url, title,classStyle,style}:any) => {
  const loadingUrl = "/loading.gif";
  const noImageUrl = "/noimage.jpg";
  

  const myLoader = ({ src}:any) => {
    return `${src}`
  }
  //return <img src={imgSrc} alt={title} className={classStyle}/>;
  return <Images   
            loader={myLoader}
            src={url}
            alt={title||'No title'}
            loading="lazy"
            placeholder="blur"
            blurDataURL="/ajax-loader.gif"
            width={100}
            height={100}
            onError={(e) => {
              // Thay đổi src của Image thành một hình ảnh mặc định
              //console.log(e);
              e.currentTarget.src = "/noimage.jpg";
              return false;
            }}
            style={style}
            className={`bg-white ${classStyle}`}
           /*  unoptimized  */
            />
};

export default ImageLoading;
