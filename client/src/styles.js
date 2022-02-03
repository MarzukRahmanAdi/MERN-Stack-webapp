import {makeStyles} from "@material-ui/core/styles";

export default makeStyles(( theme ) =>({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        background: "rgba(255, 255, 255, 0.4)",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
        backdropFilter: "blur(7.4px)",
        WebkitBackdropFilter: "blur(7.4px)",
        border: "1px solid rgba(255, 255, 255, 0.47)"
      },
      heading: {
        // color: 'rgba(0,183,255, 1)',
        color: "black"
      },
      image: {
        marginLeft: '15px',
      },
      [theme.breakpoints.down('sm')] : {
        mainContainer :{
          flexDirection:'column-reverse',
        },
      }
}))