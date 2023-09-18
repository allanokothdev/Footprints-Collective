import React from 'react'
import React, { useContext, useEffect, useState } from 'react';
import { AuthenticatedUserContext } from '../context/AuthenticatedUserProvider';
import { collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, query, where } from 'firebase/firestore';

const individualSurvey = () => {
  return (
    <div>individualSurvey</div>
  )
}

export default individualSurvey