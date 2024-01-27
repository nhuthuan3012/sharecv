import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';

export default function ReturnButton() {
  return <Link href="/home">
            <Button 
              sx={{ boxShadow: 5 }} 
              style={{color:"#FFC436",backgroundColor:"white",borderColor:"white",position: "relative",marginLeft:"10%"}} 
              variant="text" 
              startIcon={<ArrowBackIcon />}>
              Trang chủ
            </Button>
        </Link>
}