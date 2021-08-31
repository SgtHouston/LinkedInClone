
import Chris from '../../images/Avatar.png'
import Avatar from '@material-ui/icons/AccountCircle';


const defaultState = [
    {
        name: "Chris Houston",
        jobdescription : "Software Developer",
        message : "Wow, I can't wait to build more projects like this!",
        photoUrl : {Chris}
    },
    {
        name: "Elon Musky",
        jobdescription : "Billionaire, Currency Manipulator",
        message : "Buy Doge and self-drive to the moon! ",
        photoUrl : {Avatar}
    },
    {
        name: "Johnny TwoJobs",
        jobdescription : "LinkedIn Superstar | 5x Employee of the Day ",
        message : "I sure do love networking! Does anyone want to connect with me?  Anyone . . . ?  ",
        photoUrl : {Avatar}
    },
    {
        name: "Billy Bob",
        jobdescription : "Backend Savant",
        message : "The name's Billy Bob and I need a job...  Also there's this thing called Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod, ligula eget hendrerit semper, orci velit imperdiet turpis, in fringilla erat ipsum sit amet purus. Ut euismod fringilla arcu vel elementum. Curabitur nec risus ultricies, dignissim neque at, tristique libero. Cras dignissim dictum nunc, quis efficitur massa fermentum a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum eu ex vitae mollis. Sed sodales mauris erat, sed elementum risus faucibus et al that jazz.",
        photoUrl : {Avatar}
    },
    {
        name: "Linked Ingram",
        jobdescription : "Tech Recruiter",
        message : "Now hiring entry-level developers!  Masters degree in a STEM field and minimum 6 years Java or C# experience required.",
        photoUrl : {Avatar}
    },
    {
        name: "Sneaky Bot",
        jobdescription : "Website Crawler",
        message : "Pssssst...hey...hey you...yeah, YOU!...with the heartbeat...  If you want to see another project...click on the jobs link in the header...",
        photoUrl : {Avatar}
    }

]

export function posts (state = defaultState, action) {
    switch(action.type) {
        case 'SET_POSTS':
            return [action.array, ...state]
        
        default:
            return state
    }
}