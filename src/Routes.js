import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './pages/home/index'
import SearchResult from './pages/home/search'
import NewPoll from './pages/new-poll/index'
import PollPreview from './pages/new-poll/preview'
import PollSubmit from './pages/new-poll/poll-submitted'
import Settings from './pages/settings'
import MyPoll from './pages/poll/index'
import Vote from './pages/vote/vote'
import VoteComplete from './pages/vote/vote-complete'
import ViewPoll from './pages/poll/view'
import MyProfile from './pages/my-profile'
import ShareSuccess from './pages/share/success'


const Routes = () => {
  return (
    <Switch>

      <Route path="/my-profile">
        <MyProfile/>
      </Route>
      <Route path="/add-new">
        <NewPoll/>
      </Route>
      <Route path="/add-new/:id">
        <NewPoll/>
      </Route>
      <Route path="/vote/:id">
        <Vote/>
      </Route>
      <Route path="/share-success/:id">
        <ShareSuccess/>
      </Route>
      <Route path="/vote-complete/:id">
        <VoteComplete/>
      </Route>
      <Route path="/poll-preview">
        <PollPreview/>
      </Route>
      <Route path="/poll-submitted/:id">
        <PollSubmit/>
      </Route>
      <Route path="/my-polls">
        <MyPoll/>
      </Route>
      <Route path="/view-poll/:id">
        <ViewPoll/>
      </Route>
      <Route path="/settings">
        <Settings/>
      </Route>

      <Route exact path="/">
        <Dashboard/>
      </Route>
      <Route exact path="/search">
        <SearchResult/>
      </Route>
    </Switch>
  )
}
export default Routes
