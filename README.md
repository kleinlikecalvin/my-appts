## Table of Contents

- [Tech Used](#tech-used)
- [Quick Look](#quick-look)
- [How To](#how-to-build)
- [What I learned](#what-i-learned)
- [Author](#author)

## Tech Used

- [Create React App](https://create-react-app.dev/docs/getting-started/) - if you're looking to set up a React App super quick then this is the best resource!
- [Font Awesome](https://fontawesome.com/) - great for sourcing icons
- [React Color](https://www.npmjs.com/package/react-color) - I love how organized the docs are. Easy to navigate, use, and customize.
- [React Calendar](https://www.npmjs.com/package/react-calendar)

## Quick Look

- Simple dyanmic appointment page layout using state to render the Appointment Stream component from upcoming to past appointments.
- Utilized npm packages
- Desktop layout design by Seyma Anajafi (UX/UI)

## How To Recreate This App

1. Follow create-react-app instructions to initialize project
2. Remove unnecessary files
3. Import your Font Awesome Kit into head of index.html
4. Build various components
5. Add CSS
6. Add JS

## What I learned

- This build helped me practice passing state to children. This is a new concept for me that I needed to learn for a Weather App that I'm building. When my friend, Seyma, sent me this mockup I knew that I could use it as an opportunity to practice this new concept.

```
export default function Appointments() {
  const [stream, setStream] = React.useState("upcoming");

  return (
    <div className="Appointments">
      <div className="myApptsHead">
        <h1>My Appointments</h1>
        <div className="apptsTypeBtnsCont">
          <Button onClick={() => setStream("upcoming")}>
            Upcoming Appointments
          </Button>
          <Button onClick={() => setStream("past")}>Past Appointments</Button>
        </div>
      </div>
      <div className="row">
        <ApptStream stream={stream} />
        <div className="calendarCont">
          <Calendar selectRange={true} />
        </div>
      </div>
    </div>
  );
}

```

# Author

- Personal Portfolio - [Nikki Klein](https://www.kleinlikecalvin.com)
- Twitter - [@kleinLikeCalvin](https://www.twitter.com/kleinlikecalvin)
