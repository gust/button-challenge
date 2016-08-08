#Gust Interaction Developer/Designer Challenge

We’d like you to design and implement a button that the user will click to continue through an experience where they are filling out a series of forms (think onboarding or completing a profile). The button starts out in a disabled state, and once the user has supplied the required information, it will be enabled (don’t worry about writing the code to change the button’s state - we’ve provided some js to do so). 

##Requirements

*Design:*
- There should be a visible distinction between the button in the ‘disabled’ and ‘enabled’ states that communicates the relevant state to the user.
- There should be a transition/animation when the button goes from ‘disabled’ to ‘enabled’ to call the user’s attention to the fact that they are now able to continue with the experience
- If the user tries to interact with the button in order to proceed while the button is still disabled, there should be an animation that communicates that they cannot do so. 

*Tech:*
- Use only HTML and SCSS/CSS (SCSS preferred).
- The pattern you design should be reusable.
- Parts of the pattern should also be reusable:
  - Design your code such that if we wanted to use a similar button elsewhere it would be easy to use the same* code, in full or in part, but change the size of the button and the color scheme.
  - Design your code such that if we wanted to use the animation you create for design spec 3 it would be easy to use the same* code, in full or in part, elsewhere.
  *please note that by “same” we mean the actual code, not just a copy-pasted version, in order to maintain a DRY code-base. 

##What we’re looking for:
We’d like to see that you can build reusable components and interactions in scss, and we’d like to see that you have the ability to go beyond styling static elements and use the animation features of css to incorporate usability cues. We are *not* looking to be blown away by the most amazing/creative/outlandish design; obviously feel free to be as creative as you like, but we really want to see a polished design with solid technical implementation as opposed to something incredibly novel or complex.

## Technical setup
You'll need [node and npm](https://nodejs.org/) to run the scripts in this repo, which will handle compiling your scss (and watching and recompiling as you develop).
Once you've got node running, simply fork this repo and begin writing your scss in styles/button.scss. 
Running `npm run build` will compile the scss in styles; running `npm run watch` will compile the styles and then recompile them each time you make a change to a .scss file. 

## Submission
Please fork this repo, implement your design, and send an email to kara@gust.com with the link to your repo when you're ready for us to review it. If you'd like to keep your work private, please be sure to grant access to @zephyr-dev.

Happy Coding!
