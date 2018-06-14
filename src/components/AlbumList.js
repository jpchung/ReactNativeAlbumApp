// import library to create component
import React, { Component } from 'react';
import { Text, View, fetch } from 'react-native';
import AlbumDetail from './AlbumDetail';

// create compoent (class-based)
// always has render method to return jsx
class AlbumList extends Component {
  //initial component state
  state = { albums: [] };

  //lifecycle method, automatically runs when component about to be rendered
  componentWillMount() {
    console.log('componentWillMount in AlbumList');
    //debugger;

    //fetch album list json, then update component state once fetched
    fetch('http://rallycoding.herokuapp.com/api/music_albums')
    .then((response) => this.setState({ albums: response.data }));
  }

  //for each album, map to jsx tag
  renderAlbums() {
    //access js variables in jsx with curly braces
    //should give each child component a unique key for re-render
    //pass album to child component via prop
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  //render (class-based) component to screen
  render() {
    console.log(this.state);

    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

// create component (functional)
// const AlbumList = () => {
//   return (
//     <View>
//       <Text>Album List</Text>
//     </View>
//   );
// };


// make component available to other parts of app
export default AlbumList;
