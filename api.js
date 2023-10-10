import React, { useState, useEffect } from "react";
import { fetchItems } from "./api";
import List from "./List";

function mapItems(items) {
    return items.map((value , i) => ({ key: i.toString(), value}));
}