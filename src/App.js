import React, { Component } from 'react';
import Blockquote from './Blockquote';
import './App.css';

class App extends Component {
  constructor(props) { 
    super(props); 
    this.state = {
      isFixed: false,
      direction: ''
    };
    this.fix = this.fix.bind(this);
    this.unfix = this.unfix.bind(this);
    this.checkDirection = this.checkDirection.bind(this);
  }

  fix(watcher, props) { 
    this.setState({
      direction: this.checkDirection(watcher, props),
      isFixed: true 
    })
  }

  unfix(watcher, props) {
    this.setState({
      direction: this.checkDirection(watcher, props),
      isFixed: false
    });
  }

  checkDirection(watcher, props) { 
    return watcher.isAboveViewport && watcher.partiallyExitViewport ? 'up'
      : watcher.isBelowViewport || watcher.partiallyExitViewport ? 'down'
      : ''
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextState.isFixed !== this.state.isFixed) || (nextState.direction !== this.state.direction);
  }

  render() {
    return (
      <div className="App">
      <header>
        <h1 className="App-title">Scroll...</h1>
      </header>
      <article>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultrices interdum ultricies. Vestibulum molestie elementum sapien, sed faucibus nisl iaculis sed. Aenean quis erat eros. Praesent sed nunc ex. Suspendisse tincidunt a lorem vitae dapibus. Integer maximus, leo nec vehicula sagittis, velit nisl egestas libero, id imperdiet est dui quis lacus. Sed ultrices pellentesque luctus. Suspendisse sed posuere risus. Maecenas aliquet non ante nec porta. Fusce egestas congue nunc, et hendrerit nulla.</p>
        <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec et orci et augue lacinia pulvinar. Nam fermentum purus ac fermentum tincidunt. Cras semper sagittis velit, non molestie ex dictum et. Praesent posuere lacus non ex efficitur, in volutpat eros finibus. Aliquam non diam vel nunc porta imperdiet eget nec nisl. Donec eget odio faucibus, porta orci in, vulputate massa. Vivamus egestas nisi tempus, ullamcorper leo eget, aliquet risus. Vivamus mattis at lorem dictum ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at gravida justo. Mauris tempor ultrices est id eleifend. Maecenas non consequat felis. Sed cursus dui nibh, quis rhoncus eros dignissim sed. Sed sed ultricies arcu, at condimentum odio. Proin pellentesque posuere quam vel volutpat.</p>
        <p>
        Aenean ornare libero non sagittis tincidunt. Donec pellentesque feugiat placerat. Curabitur condimentum et felis ut tristique. Nulla porta aliquam lectus, quis commodo dolor pharetra sit amet. Nam erat libero, ornare eu hendrerit vel, vulputate eu elit. Vestibulum ac tellus nisl. Nunc ut velit porta felis mollis imperdiet. Phasellus lacus arcu, imperdiet viverra arcu consequat, pulvinar pretium ex.
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultrices interdum ultricies. Vestibulum molestie elementum sapien, sed faucibus nisl iaculis sed. Aenean quis erat eros. Praesent sed nunc ex. Suspendisse tincidunt a lorem vitae dapibus. Integer maximus, leo nec vehicula sagittis, velit nisl egestas libero, id imperdiet est dui quis lacus. Sed ultrices pellentesque luctus. Suspendisse sed posuere risus. Maecenas aliquet non ante nec porta. Fusce egestas congue nunc, et hendrerit nulla.</p>
        <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec et orci et augue lacinia pulvinar. Nam fermentum purus ac fermentum tincidunt. Cras semper sagittis velit, non molestie ex dictum et. Praesent posuere lacus non ex efficitur, in volutpat eros finibus. Aliquam non diam vel nunc porta imperdiet eget nec nisl. Donec eget odio faucibus, porta orci in, vulputate massa. Vivamus egestas nisi tempus, ullamcorper leo eget, aliquet risus. Vivamus mattis at lorem dictum ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at gravida justo. Mauris tempor ultrices est id eleifend. Maecenas non consequat felis. Sed cursus dui nibh, quis rhoncus eros dignissim sed. Sed sed ultricies arcu, at condimentum odio. Proin pellentesque posuere quam vel volutpat.</p>
        <Blockquote enterViewport={this.checkDirection}  direction={this.state.direction} fullyEnterViewport={this.fix} partiallyExitViewport={this.unfix} isFixed={this.state.isFixed} text="“We still feel shocked,” her mother said last month in their lawyer’s office in Philadelphia. “The university, they know everything, but they didn’t tell us anything.”" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultrices interdum ultricies. Vestibulum molestie elementum sapien, sed faucibus nisl iaculis sed. Aenean quis erat eros. Praesent sed nunc ex. Suspendisse tincidunt a lorem vitae dapibus. Integer maximus, leo nec vehicula sagittis, velit nisl egestas libero, id imperdiet est dui quis lacus. Sed ultrices pellentesque luctus. Suspendisse sed posuere risus. Maecenas aliquet non ante nec porta. Fusce egestas congue nunc, et hendrerit nulla.</p>
        <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec et orci et augue lacinia pulvinar. Nam fermentum purus ac fermentum tincidunt. Cras semper sagittis velit, non molestie ex dictum et. Praesent posuere lacus non ex efficitur, in volutpat eros finibus. Aliquam non diam vel nunc porta imperdiet eget nec nisl. Donec eget odio faucibus, porta orci in, vulputate massa. Vivamus egestas nisi tempus, ullamcorper leo eget, aliquet risus. Vivamus mattis at lorem dictum ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at gravida justo. Mauris tempor ultrices est id eleifend. Maecenas non consequat felis. Sed cursus dui nibh, quis rhoncus eros dignissim sed. Sed sed ultricies arcu, at condimentum odio. Proin pellentesque posuere quam vel volutpat.</p>
        <p> Aliquam quis mattis magna. Nam sed ipsum quis libero porta rhoncus sed et eros. Cras sollicitudin ultrices diam. Fusce blandit finibus urna non dapibus. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lectus a nibh porta gravida.
        </p>
        <p>Morbi aliquet neque erat, vestibulum euismod arcu posuere a. Donec ullamcorper est ex, vel consectetur urna eleifend nec. Aliquam congue justo et congue scelerisque. Quisque volutpat ligula non elit molestie, eget sodales felis porttitor. Aenean posuere mi ut urna dictum eleifend. Sed placerat libero at neque dictum lacinia. Nulla suscipit, lorem ut congue condimentum, diam risus efficitur ex, ut condimentum orci eros tempus elit. Vestibulum iaculis felis id varius accumsan.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultrices interdum ultricies. Vestibulum molestie elementum sapien, sed faucibus nisl iaculis sed. Aenean quis erat eros. Praesent sed nunc ex. Suspendisse tincidunt a lorem vitae dapibus. Integer maximus, leo nec vehicula sagittis, velit nisl egestas libero, id imperdiet est dui quis lacus. Sed ultrices pellentesque luctus. Suspendisse sed posuere risus. Maecenas aliquet non ante nec porta. Fusce egestas congue nunc, et hendrerit nulla.</p>
        <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec et orci et augue lacinia pulvinar. Nam fermentum purus ac fermentum tincidunt. Cras semper sagittis velit, non molestie ex dictum et. Praesent posuere lacus non ex efficitur, in volutpat eros finibus. Aliquam non diam vel nunc porta imperdiet eget nec nisl. Donec eget odio faucibus, porta orci in, vulputate massa. Vivamus egestas nisi tempus, ullamcorper leo eget, aliquet risus. Vivamus mattis at lorem dictum ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at gravida justo. Mauris tempor ultrices est id eleifend. Maecenas non consequat felis. Sed cursus dui nibh, quis rhoncus eros dignissim sed. Sed sed ultricies arcu, at condimentum odio. Proin pellentesque posuere quam vel volutpat.</p>
        <p>
        Aenean ornare libero non sagittis tincidunt. Donec pellentesque feugiat placerat. Curabitur condimentum et felis ut tristique. Nulla porta aliquam lectus, quis commodo dolor pharetra sit amet. Nam erat libero, ornare eu hendrerit vel, vulputate eu elit. Vestibulum ac tellus nisl. Nunc ut velit porta felis mollis imperdiet. Phasellus lacus arcu, imperdiet viverra arcu consequat, pulvinar pretium ex.
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultrices interdum ultricies. Vestibulum molestie elementum sapien, sed faucibus nisl iaculis sed. Aenean quis erat eros. Praesent sed nunc ex. Suspendisse tincidunt a lorem vitae dapibus. Integer maximus, leo nec vehicula sagittis, velit nisl egestas libero, id imperdiet est dui quis lacus. Sed ultrices pellentesque luctus. Suspendisse sed posuere risus. Maecenas aliquet non ante nec porta. Fusce egestas congue nunc, et hendrerit nulla.</p>
        <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec et orci et augue lacinia pulvinar. Nam fermentum purus ac fermentum tincidunt. Cras semper sagittis velit, non molestie ex dictum et. Praesent posuere lacus non ex efficitur, in volutpat eros finibus. Aliquam non diam vel nunc porta imperdiet eget nec nisl. Donec eget odio faucibus, porta orci in, vulputate massa. Vivamus egestas nisi tempus, ullamcorper leo eget, aliquet risus. Vivamus mattis at lorem dictum ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at gravida justo. Mauris tempor ultrices est id eleifend. Maecenas non consequat felis. Sed cursus dui nibh, quis rhoncus eros dignissim sed. Sed sed ultricies arcu, at condimentum odio. Proin pellentesque posuere quam vel volutpat.</p>
      </article>
      </div>
    );
  }
}

export default App;
