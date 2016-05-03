import React from 'react'
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions'
import CardHeader from 'material-ui/lib/card/card-header'
import CardMedia from 'material-ui/lib/card/card-media'
import CardTitle from 'material-ui/lib/card/card-title'
import FloatingActionButton from 'material-ui/lib/floating-action-button'
import ContentAdd from 'material-ui/lib/svg-icons/content/add'
import FlatButton from 'material-ui/lib/flat-button'
import CardText from 'material-ui/lib/card/card-text'
import Table from 'material-ui/lib/table/table'
import TableHeaderColumn from 'material-ui/lib/table/table-header-column'
import TableRow from 'material-ui/lib/table/table-row'
import TableHeader from 'material-ui/lib/table/table-header'
import TableRowColumn from 'material-ui/lib/table/table-row-column'
import TableBody from 'material-ui/lib/table/table-body'
import Toolbar from 'material-ui/lib/toolbar/toolbar'
import RaisedButton from 'material-ui/lib/raised-button'
import classes from './HomeView.scss'
import AvaImage from './ava.jpg'
import DuckImage from './Duck.jpg'
const docView = React.createClass({
	componentWillMount: function () {
		console.log('avata!!:' + classes + '/' + AvaImage);
	},
  render: function () {
    return (
      <div>
		<Card>
			<CardHeader
			  title='培训文档管理后台'
			  subtitle='在这里，你可以很方便地管理所有的培训文档和培训讲师'
			  avatar={DuckImage}
			/>
          
		</Card>
			  
			  <RaisedButton label='添加' secondary={true} onTouchTap={() => {console.log(444)}}/>
			<TableDoc/>
		</div>
    );
  }
});

const TableDoc = () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>文档名称</TableHeaderColumn>
        <TableHeaderColumn>讲师</TableHeaderColumn>
		<TableHeaderColumn>发布日期</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>1</TableRowColumn>
        <TableRowColumn>React前端开发</TableRowColumn>
        <TableRowColumn>Alex</TableRowColumn>
		<TableRowColumn>4/21/2016</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>2</TableRowColumn>
        <TableRowColumn>JVM原理分析</TableRowColumn>
        <TableRowColumn>Jack Chen</TableRowColumn>
		<TableRowColumn>4/21/2016</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>3</TableRowColumn>
        <TableRowColumn>Java内存模型与多线程</TableRowColumn>
        <TableRowColumn>Tomy</TableRowColumn>
		<TableRowColumn>4/21/2016</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>4</TableRowColumn>
        <TableRowColumn>Redis缓存开发</TableRowColumn>
        <TableRowColumn>Steve Brown</TableRowColumn>
		<TableRowColumn>4/21/2016</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
);

export default docView
