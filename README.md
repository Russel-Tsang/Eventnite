# Eventnite

<img width=600px height=400px src="https://aa-file-upload-dev.s3.amazonaws.com/eventnite_ss.png" />

https://eventnite-aa.herokuapp.com/

Eventnite is an Eventbrite clone, originally intended for night-time events but now welcomes all types of occasions. It replicates the ability to create, register, and view events. This project demonstrates strong adherence to principles of CRUD operations and user-friendly interfaces. 

## Technologies
* React
* Redux 
* SCSS
* Ruby on Rails
* PostgreSQL
* Webpack 
* jQuery-rails
* Heroku
* AWS

## Features
* Signing in / User auth
* Creating / Reading / Updating / Deleting events
* Searching for events
* Uploading images to events

## Example Code

### Filtering Events

<img src="https://github.com/Russel-Tsang/Eventnite/blob/master/app/assets/images/searching_filtering.gif" />

When I first implemented searching/filtering features, I realized that the filter options would not persist on page refresh. I found that the best way to tackle this would be to make use of the url string. To allow persistence of search options upon page refresh, I stored options as parameters in the format of:

```javascript
`/all_events/:searchValue/:dayFilter`
```

When the search button is clicked, user's input is inserted into params, or 'all' is inserted if no input: 
```javascript
handleSearchClick() {
    if (this.state.searchValueHolder) {
        this.props.history.push(`/all_events/${this.state.searchValueHolder}/${this.state.dayFilter.toLowerCase()}`);
    } else {
        this.props.history.push(`/all_events/all/${this.state.dayFilter.toLowerCase()}`);
    }
}
```

This triggers componentDidUpdate and sets state accordingly: 
```javascript
componentDidUpdate() {
    let searchValue = this.props.match.params.searchValue;
    let searchValueHolder = searchValue === "all" ? '' : searchValue;
    let dayFilter = this.props.match.params.dayFilter;
    if (searchValue && this.state.searchValue !== searchValue) {
        this.setState({ searchValue, searchValueHolder });
    } 
    if (dayFilter && this.state.dayFilter !== dayFilter) {
        this.setState({ dayFilter: dayFilter });
    }
}
```

### Future Implementations

- show event creator all of his/her event attendees
- improve usage of Google Maps api to show more information about venues 
