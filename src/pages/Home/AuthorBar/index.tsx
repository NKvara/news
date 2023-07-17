import {authorNames} from '@/components/helper/authors';
import getAuthorPicture from '@/components/helper/writersData';
const AuthorBar = () =>{
    return(
        <div className="flex justify-between">
            {authorNames.map((o) => (
                <div>
                    <img className="aspect-square h-8 w-8 bg-[image:var(--image-url)] bg-cover rounded-full bg-no-repeat bg-center" src={getAuthorPicture(o.id)} />
                    {o.name.split(' ')[0]}
                </div>
            ))}
        </div>
    )
};

export default AuthorBar;