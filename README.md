# UCSD Class Search

A better way to search for classes than WebReg.

### WebReg disadvantages
1. There is no way to filter out the classes you are not eligible to take
2. The UI is gross

There is a better way.

## Database VS JSON Files

### JSON Files
**Benefits:**
- the user would have to load the page once and then they would not be waiting for anything to load after that
- wouldn't require setting up a backend

**Drawbacks:**
- Cringe

### Database
**Benefits:**
- Cleaner implementation
- More memory-efficient

**Drawbacks:**
- Setting up a backend is time consuming


## UX Design

### Wizard
- Asks users to first select a major
- Shows the users classes from that major, with the option to expand other majors
- Users select the classes they have taken and submit
- Users can then search based on prerequisites

- We could give users the option to download a CSV with their class history inside, so the next time they come to the site, they can just upload
- We could also just set up user authentication so they can login and save their class history

### Read PDF of Class History
- Difficult to implement? Requires some sort of computer vision, photo reading because often PDFs are binary. There are probably libraries out there for this things, but definitely not an easy task
- Would have to hard code a lot of the parsing because it might have to be based on like indexing a giant string or parsing for specific words
