"use client"
import React, { useEffect } from 'react'
import { CollectionItem } from '../../../types';
import useCollectionsStore from '../../../hooks/client/global/useCollectionsStore';
import { useWixClient } from '../../../hooks/client/wix/useWixClient';
import useAuthStore from '../../../hooks/client/global/useAuthStore';
import { useIsLoggedIn } from '../../../hooks/client/auth/useIsLoggedIn';
import useCartStore from '../../../hooks/client/cart/useCartStore';

interface OnlyForSearchCollectionsProps {
collections: CollectionItem[];
}

function OnlyForLoadData({collections}:OnlyForSearchCollectionsProps) {
const {setCollections} = useCollectionsStore()

const {isLoggedIn}= useIsLoggedIn()

  const {setIsLoggedIn, setLoading}= useAuthStore()
  const { getCart} = useCartStore();


useEffect(()=>{
    setCollections(collections)
},[setCollections, collections])


useEffect(() => {
  if (typeof isLoggedIn === 'boolean') {
    setIsLoggedIn(isLoggedIn);
    setLoading(false);
    if (isLoggedIn) {
      getCart();
    }
  }
}, [isLoggedIn, setIsLoggedIn, setLoading, getCart]);

  return (
    <></>
  )
}

export default OnlyForLoadData