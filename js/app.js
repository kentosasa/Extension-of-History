//空データ
var items = [];
items.push({name: "hoge", hoge: "hoge"});

var HistoryList = React.createClass({displayName: "HistoryList",
  render: function(){
    var historyItems = this.props.items.map(function(item){
      return(
          React.createElement("div", {className: "history"}, 
          item.title
          )
          );
    });
    return (
        React.createElement("div", {className: "historyList"}, 
           historyItems 
        )
        );
  }
});


React.render(
    React.createElement(HistoryList, {items: items}),
    document.getElementById('content')
    );


//値の呼び出し
chrome.storage.local.get('histories', function(data){
  items = items.concat(data.histories);
  React.render(
    React.createElement(HistoryList, {items: items}),
    document.getElementById('content')
    );
});     


