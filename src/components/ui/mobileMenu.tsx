"use client";
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 50 50">
          <path d="M0 7.5h50v5H0zM0 22.5h50v5H0zM0 37.5h50v5H0z" />
        </svg>
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><Link href="#">Início</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href="#IDservicos">Serviços</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href="#IDabout">Sobre Nós</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href="#contact">Contato</Link></MenuItem>

        {/* Divisor */}
        <hr className="my-2" />

        {/* Criar Conta */}
        <MenuItem onClick={handleClose}>
          <Link href="/criar-conta">Criar Conta</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
